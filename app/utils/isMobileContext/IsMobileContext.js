"use client";
import { createContext, useEffect, useState } from "react";

export const IsMobileContext = createContext();

function IsMobileProvider({ children }) {
  const [isMobile, setIsMobile] = useState();
  const isMobileHandler = (e) => {
    setIsMobile(e.matches);
  };
  useEffect(() => {
    window.matchMedia("(max-width:768px)").addEventListener("change", isMobileHandler);
    setIsMobile(window.matchMedia("(max-width:768px)").matches);
  }, []);
  return <IsMobileContext.Provider value={{ isMobile }}>{children}</IsMobileContext.Provider>;
}

export default IsMobileProvider;
