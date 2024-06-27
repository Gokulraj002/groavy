import { useEffect } from "react";

const AnalyticsAndAds = () => {
  useEffect(() => {
    // Google Analytics
    const gaScript = document.createElement("script");
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_TRACKING_ID}`;
    gaScript.async = true;
    document.head.appendChild(gaScript);

    // Google Ads Conversion Tracking
    const gAdsScript = document.createElement("script");
    gAdsScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GADS_CONVERSION_ID}`;
    gAdsScript.async = true;
    document.head.appendChild(gAdsScript);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    // Initialize Google Analytics
    gtag("js", new Date());
    gtag("config", process.env.REACT_APP_GA_TRACKING_ID);

    // Initialize Google Ads Conversion Tracking
    gtag("config", process.env.REACT_APP_GADS_CONVERSION_ID);

    // Event snippet for conversion page
    gtag("event", "conversion", {
      send_to: `${process.env.REACT_APP_GADS_CONVERSION_ID}/${process.env.REACT_APP_GADS_CONVERSION_LABEL}`,
      value: 1.0,
      currency: "INR",
    });
  }, []);

  return null; // No need to render anything
};

export default AnalyticsAndAds;
