import React from "react";
import PageMain from "./PageMain";
import PageNav from "./PageNav";

function Page(props) {
  const { children } = props;
  console.log(children.props.path);

  return (
    <div className="page">
      <PageNav />
      <PageMain>{children}</PageMain>
    </div>
  );
}

export default Page;
