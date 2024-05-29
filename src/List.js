import React, { useEffect, useState } from "react";

const List = ({ getCount }) => {
  const [countItem, setCountItem] = useState([]);

  useEffect(() => {
    console.log("Get Count Item Calling");
    setCountItem(getCount);
  }, [getCount]);

  return (
    <div>
      {countItem?.map((value, i) => (
        <li key={i}>{value}</li>
      ))}
    </div>
  );
};

export default List;
