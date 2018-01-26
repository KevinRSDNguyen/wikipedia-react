import React from 'react';

const ResultListItem = ({ title, description, href }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{href}</p>
    </div>
  );
};

export default ResultListItem;