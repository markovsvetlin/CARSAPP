import Appbar from "./Appbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Cars</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Appbar />
      {children}
      <style jsx global>{`
        body {
          width: 100%;
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.8;
          color: #f9f9f9;
          font-family: sans-serif;
        }
        h1 {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
