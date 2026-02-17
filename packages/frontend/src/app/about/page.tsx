import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | WebApp Template',
  description: 'About this template',
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">About</h1>

        <div className="space-y-4 mb-8">
          <p>This is a production-ready web application template built with:</p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Backend:</strong> Express.js with TypeScript
            </li>
            <li>
              <strong>Frontend:</strong> Next.js 14 with App Router
            </li>
            <li>
              <strong>Language:</strong> TypeScript throughout
            </li>
            <li>
              <strong>Styling:</strong> Tailwind CSS
            </li>
            <li>
              <strong>Architecture:</strong> Monorepo with npm workspaces
            </li>
          </ul>

          <p>The template includes best practices for development, testing, and deployment.</p>
        </div>

        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
