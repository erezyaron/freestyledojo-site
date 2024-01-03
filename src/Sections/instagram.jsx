import React from 'react';

const InstagramEmbedComponent = ({ embedCode }) => {
  // This function creates a markup object required for dangerouslySetInnerHTML
  const createMarkup = () => {
    return { __html: embedCode };
  };

  return (
    <div dangerouslySetInnerHTML={createMarkup()} />
  );
};

export default InstagramEmbedComponent;
