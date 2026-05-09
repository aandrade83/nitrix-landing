import "./globals.css";

export const metadata = {
  title: "NitricX — Natural Performance Drink",
  description:
    "NitricX is a premium natural performance drink. Plant-powered S7® formulation. Feel the flow.",
  metadataBase: new URL("https://nitricx.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ink text-white antialiased">
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
