import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <span>Search : </span>
      <br />
      <input
        className="ml-2 mx-2  input-search form-control"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        style={{ width: "30%" }}
      />
    </div>
  );
};
