import { useEffect } from "react";

const CSSLoader = (url) => {
    console.log("hello there "+ url)
  useEffect(() => {
   let  fullurl = 'http://localhost:3000/'+url;
    const link = document.createElement("link");
    console.log(link);
    link.rel = "stylesheet";
    link.href = fullurl;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [url]);
};

export default CSSLoader;