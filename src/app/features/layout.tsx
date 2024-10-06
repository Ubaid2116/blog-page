import Navbar from "@/components/navbar";
import "../../style/globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Blogger App | Your blogging guideline",
  description: "This is the Blogger app boundary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
