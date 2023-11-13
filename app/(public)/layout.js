export const metadata = {
  title: 'Login',
  icons: {
    icon: '../../logo2.svg', // /public path
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
