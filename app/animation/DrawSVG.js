"use client";
import { useGSAP } from "@gsap/react";
import React, { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(DrawSVGPlugin,ScrollTrigger);
const DrawSVG = ({ children }) => {
  const svgRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline({defaults:{ease:"power3.inOut"}} )
    tl.fromTo("path", { drawSVG: 0 }, { drawSVG: "100%", duration: 2, stagger: .02 })
    .to("path" ,{fillOpacity:1,fill:"white" ,duration:.5})
      .to("path.egypt", { fillOpacity: 1, fill: "red", duration: .5 }) 
    
    ScrollTrigger.create({
      animation: tl,
      trigger: svgRef.current,
      pin: true,
      start: "+=100",
      end:"bottom bottom",
      anticipatePin: 2,
      markers: true,
      pinSpacing: false,
      once: true,
    })
    return ()=>tl
  }, []);
  return <div ref={svgRef} className="svg">{children}</div>;
};

export default DrawSVG;
