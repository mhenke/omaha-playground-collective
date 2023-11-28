import "~/styles/globals.css";

import { AxiomWebVitals } from "next-axiom";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { FilterForm } from "./_components/FilterForm";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

import { Analytics } from "@vercel/analytics/react";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Omaha Playground Collective",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const trpcHeaders = headers();

  return (
    <html
      lang="en"
      data-theme="emerald"
      className="relative flex h-full w-full flex-col space-y-4"
    >
      <TRPCReactProvider headers={trpcHeaders}>
        <body className={`${montserrat.className}`}>
          <Header title={metadata.title} />
          <div className="grid w-full grid-cols-12">
            <section className="col-span-12 lg:col-span-12 lg:flex lg:flex-col">
              <FilterForm />

              <div className="relative flex h-full w-full flex-col space-y-4">
                {children}
              </div>
            </section>
          </div>
          <Footer />
          <Analytics />
          <AxiomWebVitals />
        </body>
      </TRPCReactProvider>
    </html>
  );
}
