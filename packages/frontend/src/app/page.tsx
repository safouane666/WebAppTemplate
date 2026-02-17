import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home | WebApp Template',
  description: 'Welcome to the ultimate TypeScript web app template',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to WebApp Template</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Backend</h2>
            <p className="mb-4">Express.js server with TypeScript, ready for production.</p>
            <Link href="/api/health" className="text-blue-600 hover:underline" target="_blank">
              Check API Health →
            </Link>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
            <p className="mb-4">Next.js 14 with App Router, TypeScript, and Tailwind CSS.</p>
            <Link href="/about" className="text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Built with modern best practices and production-ready architecture.
          </p>
        </div>
      </div>
    </main>
  );
}
