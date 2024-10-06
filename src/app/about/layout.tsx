import "../../style/globals.css";

export const metadata = {
  title: "Blogger App | Your blogging guideline",
  description: "This is the Blogger app boundary",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
