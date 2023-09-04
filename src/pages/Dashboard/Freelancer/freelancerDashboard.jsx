import React from "react";
import { Link } from "react-router-dom";

const freelancerDashboard = () => {
  return (
    <div className="mt-24">
      <Link to="/dashboard/freelancer/onboarding">
        <span className="font-semibold hover:underline">
          Complete profile to browse available jobs
        </span>
      </Link>
    </div>
  );
};

export default freelancerDashboard;
