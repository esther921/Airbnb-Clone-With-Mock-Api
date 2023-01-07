import { useRouter } from "next/router";
import React from "react";

const Details = () => {
  const {
    query: { id },
  } = useRouter();
  return <div>{id}</div>;
};

export default Details;
