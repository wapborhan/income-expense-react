import React from "react";

const NotFound = () => {
  document.title = "Not Found";
  return (
    <div className="text-center">
      <div className="four">404</div>
      <div className="pagenotfound">Page Not Found</div>
    </div>
  );
};

export default NotFound;
