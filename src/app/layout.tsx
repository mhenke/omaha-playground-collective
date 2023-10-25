import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import Header from "./_components/Header";
import { Search } from "react-feather";
import Footer from "./_components/Footer";
import Tag from "./_components/Tag";
import Sidebar from "./_components/Sidebar";

const inter = Inter({
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
  return (
    <html lang="en" data-theme="forest">
      <body className={`font-sans ${inter.variable}`}>
        <Header />
        <div className="grid w-full grid-cols-12">
          <section className="col-span-8 flex flex-col border-r border-gray-300">
            <div className="flex w-full items-center justify-between px-3 py-3">
              <div className="relative w-full max-w-md">
                <label className="text-accent-700 absolute left-4 top-3.5 text-base">
                  <Search />
                </label>
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-full rounded-3xl border px-10 py-2 md:w-auto"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-accent-700 whitespace-nowrap">
                  My topics:
                </div>
                <div className="flex w-full items-center space-x-2">
                  <Tag />
                </div>
              </div>
            </div>
            <div className="border-accent-200 flex w-full items-center justify-between border-b-2 px-10 py-3">
              <div className="text-accent-900">Articles</div>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="relative flex h-full w-full flex-col space-y-4">
              <TRPCReactProvider headers={headers()}>
                {children}
              </TRPCReactProvider>
            </div>
          </section>
          <Sidebar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
