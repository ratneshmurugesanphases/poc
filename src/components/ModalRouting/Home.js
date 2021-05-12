import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl text-gray-600 font-medium">Welcome!</h1>
      <Link to="/contacts">
      <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">Contacts</button>
      </Link>
      <Link to="/dhtmlxdefaultview">
      <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">dhtmlxdefaultview</button>
      </Link>
      <Link to="/master-slave">
      <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">master-slave</button>
      </Link>
    </div>
  )
}

export default Home;