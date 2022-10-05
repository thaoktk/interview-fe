import React from "react";

function Layout({ children }) {
  return (
    <div className="bg-secondary px-5 md:px-10 py-8 min-h-screen">
      <div className="max-w-screen-2xl">{children}</div>
    </div>
  );
}

export default Layout;
