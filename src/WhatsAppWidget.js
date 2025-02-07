import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const WhatsAppWidget = () => {
  const location = useLocation();

  useEffect(() => {
    const loadScript = () => {
      if (!document.getElementById("wa-widget")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "https://cdn.msgmaker.in/es.chat.min.js?t=be21cb2c-8445-4c06-b24f-8864293d830f";
        script.id = "wa-widget";
        script.async = true; 
        document.body.appendChild(script);

        script.onload = () => {
          console.log("WhatsApp widget script loaded successfully.");
        };

        script.onerror = () => {
          console.error("Failed to load WhatsApp widget script.");
        };
      }
    };

    loadScript();

    return () => {
      const existingScript = document.getElementById("wa-widget");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [location]);

  return null;
};

export default WhatsAppWidget;


// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const WhatsAppWidget = () => {
//   const location = useLocation();
//   useEffect(() => {
//     const existingScript = document.getElementById("wa-widget");
//     if (existingScript) {
//       existingScript.remove(); // Remove the existing script if already added
//     }

//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = "https://d2jyl60qlhb39o.cloudfront.net/integration-plugin.js";
//     script.id = "wa-widget";
//     script.setAttribute("widget-id", "3wTGPu"); // Add required attribute

//     document.body.appendChild(script);

//     return () => {
//       if (script) {
//         script.remove(); // Cleanup the script on unmount
//       }
//     };
//   }, [location]); // Re-run whenever location changes

//   return null; // Component renders no visible output
// };

// export default WhatsAppWidget;
