// import { useEffect, useState } from "react";
// import banner1 from "../assets/banner1.png";
// import banner2 from "../assets/banner2.png";
// import mobilebanner1 from "../assets/mobilebanner1.png";
// import mobilebanner2 from "../assets/mobilebanner2.png";
// import newBanner from "../assets/newBanner.jpeg";



// export default function Hero() {
//   const [banner, setBanner] = useState(banner1);
//   const [mobileBanner, setMobileBanner] = useState(mobilebanner1);
//   const [isMobile, setIsMobile] = useState(false);
//   const [fade, setFade] = useState(false);

//   // Detect mobile/desktop
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Desktop banner switching
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setBanner((prev) => (prev === newBanner ? banner2 : newBanner));
//         setFade(false);
//       }, 350);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Mobile banner switching
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setMobileBanner((prev) => (prev === mobilebanner1 ? mobilebanner2 : mobilebanner1));
//         setFade(false);
//       }, 350);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <img
//         src={isMobile ? mobileBanner : banner}
//         alt="Danka Chaat Hero Banner"
//         className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out "
//         }`}
//         loading="eager"
//       />
//     </section>
//   );
// }
import React from 'react'

const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero
