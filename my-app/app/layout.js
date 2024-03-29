import "./globals.css";


export const metadata = {
  title: "Медиацентр",
  description: "Медиацентр гимназии №97 г. Ельца",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
