import Head from "next/head";
import React, { PropsWithChildren } from "react";
import { Footer, Navbar } from ".";

interface LayoutProps extends Partial<PropsWithChildren> {
  page: string;
}
const Layout = ({ children, page }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${page} | DatingGPT`}</title>
        <meta name="title" content={`${page} | DatingGPT`}></meta>
        <meta name="description" content="DatingGPT"></meta>
      </Head>
      <main className="flex flex-col justify-between min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
