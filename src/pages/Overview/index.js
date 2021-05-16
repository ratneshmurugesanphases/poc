import React from "react";

import LogoutButton from "atoms/LogoutButton";
import Auth0Profile from "atoms/Auth0Profile";

export default function Overview() {
  return (
    <div>
      Overview
      <Auth0Profile />
      <LogoutButton />
    </div>
  );
}
