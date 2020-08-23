// Dependencies
import React from "react";
import classNames from "classnames";

const MainLayout = (props) => {
  let wrapperClasses = classNames("o-wrapper", props.wrapperClass);
  return (
    <main className={wrapperClasses}>
      <div className="container">{props.children}</div>
    </main>
  );
};
export default MainLayout;
