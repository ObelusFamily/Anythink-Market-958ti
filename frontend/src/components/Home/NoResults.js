import React from "react";

export const NoResults = ({ searchTerm }) => {
  return <div id="empty">{`No items found for ${searchTerm}`}</div>;
};
