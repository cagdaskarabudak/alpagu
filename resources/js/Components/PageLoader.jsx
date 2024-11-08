import { useEffect, useRef, useState, useLayoutEffect } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const pageLoaderDom = useRef();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if(!loading){
      setTimeout(()=>{
        pageLoaderDom.current.remove();
      }, 500);
    }
  }, [loading]);

    return (
      <div className="page-loader" ref={pageLoaderDom}>
        <div className="page-loader-spinner"></div>
        <img
          src="/storage/images/alpagu.webp"
          alt="page-loader-logo"
          className="page-loader-logo"
        />
      </div>
    );
}
