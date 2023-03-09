import * as React from "react";
import Head from "next/head";

type LayoutProps = {
  title?: string;
  children?: any;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Your Photos web application" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>
);

export default Layout;
