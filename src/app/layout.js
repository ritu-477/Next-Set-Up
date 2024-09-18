
import "./globals.css";


export const metadata = {
  title: "Next Set UP",
  description: "Next app",
  metadataBase: new URL("https://next-js-setup-nine.vercel.app/"),
  openGraph: {
    images: "/meta-tag.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
