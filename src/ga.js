export const sendPageview = (path) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'pageview',
    page_path: path,
  });
};
