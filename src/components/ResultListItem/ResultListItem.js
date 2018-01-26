import React from 'react';

const ResultListItem = ({ title, description, href }) => {
  return (
    <li className="list-group-item">
      <h4><a href={href} target='blank'>{title}</a></h4>
      <p>{description}</p>
    </li>
  );
};

export default ResultListItem;