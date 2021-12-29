import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="dashboard_container">
      <h1 className="dashboard_title">Dashboard</h1>
      <p>This is the Dashboard</p>
      <Link to="posts" className="button">
        View Posts
      </Link>
    </div>
  );
};

export default DashboardPage;
