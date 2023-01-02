import React from "react";

const Wrapper = ({ styles, children }) => {
  return (
    <div
      className={`px-10 desktop:px-20 max-w-[157.5625rem] mx-auto ${styles}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
