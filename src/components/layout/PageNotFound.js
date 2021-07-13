import React from "react";

const PageNotFound = ({message,messageInfo}) => {
  return (
    <div className='text-center my-3'>
      <h2 className='text-primary x-large'>
        <i className='fas fa-exclamation-triangle '> { message? message : 'Page Not Found !'}</i>
      </h2>
      <br />
      <p className='large'>{ messageInfo? messageInfo : 'Page does not exists (404)'}</p>
    </div>
  );
};

export default PageNotFound;
