import React from "react";

import LogoutButton from "molecules/LogoutButton";
import Auth0Profile from "molecules/Auth0Profile";

export default function Overview() {
  return (
    <div>
      Overview
      <Auth0Profile />
      <LogoutButton />
    </div>
  );
}
