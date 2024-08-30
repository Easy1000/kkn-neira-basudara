import { Inter } from "next/font/google";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const libre = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-franklin',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Banda Pedia - Neira Basudara",
  description: "Tim KKN-PPN UGM Periode II 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={libre.className}>{children}</body>
    </html>
  );
}
