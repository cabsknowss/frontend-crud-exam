import React from "react";

function PageMain(props) {
  const { children } = props;
  console.log(children);

  return (
    <main className="page-main" role="main">
      {children}
    </main>
  );
}

export default PageMain;
