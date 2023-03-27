import Header from "@/components/Header";
import "../styles/globals.css";
import PromptInput from "@/components/PromptInput";
import ClientProvider from "@/components/clientProvider";

export const metadata = {
  title: "DALL·E 2.0 Image Generator - Ashirwad Shetye",
  description:
    "Generated Images using DALL·E 2.0 and ChatGPT suggestion. Built with Next.js 13.2, DALL·E 2.0, and ChatGPT. This app is created by Ashirwad Shetye",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <Header />

          <PromptInput />

          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
