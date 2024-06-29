import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import Loader from './Component/Loader'; // Import the Loader component

// Lazy load App component
const App = React.lazy(() => import('./App'));

const rootElement = document.getElementById('root');

// App component with loader delay
const AppWithLoaderDelay = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Function to dynamically add Zoho SalesIQ script to the document
    const addZohoSalesIQScript = () => {
      var $zoho = window.$zoho || {};
      window.$zoho = $zoho; // Attach $zoho to the global window object
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "siqae703caca6166e5e690c2152de007bef5af35aca81e17bf66af79330a6b69320",
        values: {},
        ready: function () {},
      };

      var d = document;
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.id = "zsiqscript";
      s.defer = true;
      s.src = "https://salesiq.zohopublic.in/widget";
      var t = d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s, t);
    };

    addZohoSalesIQScript(); // Call the function to add the Zoho SalesIQ script

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {showLoader ? <Loader /> : <App />}
    </Suspense>
  );
};

// Function to render or hydrate based on existing content
const renderOrHydrate = (element) => {
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(element, rootElement);
  } else {
    ReactDOM.render(element, rootElement);
  }
};

// Render or hydrate the AppWithLoaderDelay component
renderOrHydrate(<AppWithLoaderDelay />);
