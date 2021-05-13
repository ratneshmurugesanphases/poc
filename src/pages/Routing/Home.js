import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/contacts">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          Contacts
        </button>
      </Link>
      <Link to="/calendar-view">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          Calendar View
        </button>
      </Link>
      <Link to="/master-slave">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          master-slave
        </button>
      </Link>
      <Link to="/monday-view">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          Monday view
        </button>
      </Link>
    </div>
  );
};

export default Home;
