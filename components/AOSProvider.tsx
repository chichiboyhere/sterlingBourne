// "use client"; // This directive marks the component as Client Component

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import the AOS CSS file

// const AOSProvider = ({ children }) => {
//   useEffect(() => {
//     AOS.init({
//       // You can add global settings here
//       duration: 800, // values from 0 to 3000, with step 50ms
//       once: false, // whether animation should happen only once - while scrolling down
//       // ... other options
//     });
//     // Optional: AOS.refresh() if you have dynamic content loading
//   }, []);

//   return <>{children}</>;
// };

// export default AOSProvider;

// components/AOSProvider.tsx
"use client";

import { useEffect, Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      // You can add global settings here
      duration: 1000,
    });
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AOSProvider;
