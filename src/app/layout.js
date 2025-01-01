import localFont from "next/font/local";
import "./globals.css";
import Header from './components/header';
import Footer from './components/footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "kaku",
  description: "where productivity meets simplicity!",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#000" }],
  authors: [
    { name: "Renz Tolentino" },
    {
      name: "Renz Tolentino",
      url: "https://github.com/rvnztolentino",
    },
    {
      name: "Bently Rafa",
      url: "https://github.com/bntlyr",
    }
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/KAKU-logo-128.png" },
    { rel: "icon", url: "/KAKU-logo-128.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="generator" content={metadata.generator} />
        <link rel="manifest" href={metadata.manifest} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        {metadata.themeColor.map(({ media, color }, index) => (
          <meta key={index} name="theme-color" media={media} content={color} />
        ))}
        {metadata.authors.map(({ name, url }, index) => (
          <meta key={index} name="author" content={name} {...(url && { href: url })} />
        ))}
        <meta name="viewport" content={metadata.viewport} />
        {metadata.icons.map(({ rel, url }, index) => (
          <link key={index} rel={rel} href={url} />
        ))}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
