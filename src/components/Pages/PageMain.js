import React from "react";

function PageMain(props) {
  const { children } = props;

  return <main role="main">{children}</main>;
}

export default PageMain;
