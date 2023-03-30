import Header from "@/components/Header";
import "../styles/globals.css";
import PromptInput from "@/components/PromptInput";
import ClientProvider from "@/components/clientProvider";

export const metadata = {
  title: "DALL·E 2.0 图像生成器 - Ashirwad Shetye",
  description:
    "使用 DALL·E 2.0 和 ChatGPT 建议生成图像。使用 Next.js 13.2、DALL·E 2.0 和 ChatGPT 构建。此应用程序由 Ashirwad Shetye 创建",
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
