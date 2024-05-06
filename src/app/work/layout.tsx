import type { Metadata } from 'next'
import "../globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | Rudolf Burda ART',
    default: 'Rudolf Burda ART',
  },
  description: 'Official website of the artist Rudolf Burda',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}