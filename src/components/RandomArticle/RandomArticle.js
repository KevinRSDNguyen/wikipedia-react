import React from 'react';
import './RandomArticle.css';

const RandomArticle = () => {
  return (
    <button class='btn btn-primary'>
      <a className="nostyle" target='blank'
        href="https://en.wikipedia.org/wiki/Special:Random"
      >
        Random article
      </a>
    </button>
  );
};

export default RandomArticle;