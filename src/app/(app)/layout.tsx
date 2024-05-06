import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Test Website',
    default: 'Support Test Website',
  },
  description: 'Support Test Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}