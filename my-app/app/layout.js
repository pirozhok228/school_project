import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const metadata = {
  title: "Медиацентр",
  description: "Медиацентр гимназии №97 г. Ельца",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
