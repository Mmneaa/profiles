import "./globals.css";

export const metadata = {
  title: "Profiles page",
  description: "Profiles page for users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
