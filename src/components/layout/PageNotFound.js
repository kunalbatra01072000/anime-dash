import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <h2 className='text-primary x-large'>
        <i className='fas fa-exclamation-triangle '> Page Not Found !</i>
      </h2>
      <br />
      <p className='large'>Page does not exists (404)</p>
    </div>
  );
};

export default PageNotFound;
