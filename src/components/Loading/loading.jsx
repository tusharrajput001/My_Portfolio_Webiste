import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import './loading.css'; 

const Loading = ({ loading }) => {
  return (
    <div className="loading-page">
      <HashLoader
        color={"yellow"}
        loading={loading}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h1 className='load-head'>Loading....</h1>
    </div>
  );
};

export default Loading;
