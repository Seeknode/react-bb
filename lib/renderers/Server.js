import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../components/App';

const serverContent = () => {

  const initialContent = ReactDOMServer.renderToString(
    <App />
  );

  return initialContent;
};

export default serverContent;
