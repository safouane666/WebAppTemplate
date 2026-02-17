# Multi-stage Dockerfile for production builds

# Stage 1: Build shared package
FROM node:20-alpine AS shared-builder
WORKDIR /app
COPY package*.json ./
COPY packages/shared ./packages/shared
RUN npm ci --workspace=@webapp-template/shared && \
    npm run build --workspace=@webapp-template/shared

# Stage 2: Build backend
FROM node:20-alpine AS backend-builder
WORKDIR /app
COPY package*.json ./
COPY packages/backend ./packages/backend
COPY --from=shared-builder /app/packages/shared ./packages/shared
RUN npm ci --workspace=@webapp-template/backend && \
    npm run build --workspace=@webapp-template/backend

# Stage 3: Build frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
COPY packages/frontend ./packages/frontend
COPY --from=shared-builder /app/packages/shared ./packages/shared
RUN npm ci --workspace=@webapp-template/frontend && \
    npm run build --workspace=@webapp-template/frontend

# Stage 4: Production runtime
FROM node:20-alpine AS production
WORKDIR /app

# Copy package files
COPY package*.json ./

# Copy built packages
COPY --from=shared-builder /app/packages/shared/dist ./packages/shared/dist
COPY --from=shared-builder /app/packages/shared/package.json ./packages/shared/package.json
COPY --from=backend-builder /app/packages/backend/dist ./packages/backend/dist
COPY --from=backend-builder /app/packages/backend/package.json ./packages/backend/package.json
COPY --from=frontend-builder /app/packages/frontend/.next ./packages/frontend/.next
COPY --from=frontend-builder /app/packages/frontend/public ./packages/frontend/public
COPY --from=frontend-builder /app/packages/frontend/package.json ./packages/frontend/package.json
COPY --from=frontend-builder /app/packages/frontend/next.config.js ./packages/frontend/next.config.js

# Install production dependencies only
RUN npm ci --omit=dev && \
    npm ci --omit=dev --workspace=@webapp-template/shared && \
    npm ci --omit=dev --workspace=@webapp-template/backend && \
    npm ci --omit=dev --workspace=@webapp-template/frontend

# Expose ports
EXPOSE 3000 3001

# Start both services (you might want to use a process manager like PM2 in production)
CMD ["sh", "-c", "npm run start --workspace=@webapp-template/backend & npm run start --workspace=@webapp-template/frontend & wait"]
