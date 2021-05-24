import React from "react";
import LogoutButton from "atoms/LogoutButton";
import ApiPage from "atoms/ApiPage";

export default function ApiView() {
  return (
    <>
      <LogoutButton />
      <div>
        <ApiPage />
      </div>
    </>
  );
}
