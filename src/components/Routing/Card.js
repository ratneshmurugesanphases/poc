import React from "react";
import { Link, useLocation } from "react-router-dom";

const Card = ({ name }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="w-56 pb-2 mt-8 mx-4 bg-white rounded-md border border-gray-200 overflow-hidden shadow-lg">
      <Link
        to={{
          pathname: `/contact/${name}`,
          state: { background: location },
        }}
      >
        <h1 className="text-lg font-medium text-gray-600 mt-2">{name}</h1>
        <p className="text-sm text-gray-600">Project Manager {name}</p>
      </Link>
    </div>
  );
};

export default Card;
