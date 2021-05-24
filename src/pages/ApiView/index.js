import React from "react";
import LogoutButton from "atoms/LogoutButton";
import { ErrorBoundary } from "react-error-boundary";

import ApiPage from "atoms/ApiPage";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function ApiView() {
  return (
    <>
      <LogoutButton />

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <ApiPage />
      </ErrorBoundary>
    </>
  );
}
