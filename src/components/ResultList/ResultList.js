import React from 'react';
import ResultListItem from './../ResultListItem/ResultListItem';

const ResultList = ({ results }) => {
  const resultListItems = results.map(result => {
    return <ResultListItem {...result} key={result.href}/>
  });
  return (
    <div>
      {resultListItems}
    </div>
  );
};

export default ResultList;