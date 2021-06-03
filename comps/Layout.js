import Appbar from "./Appbar"



const Layout = ({children}) => {
    return (
        <div>
            <Appbar />
            {children}
            <style jsx global>{`
        body {
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
    )
}

export default Layout
