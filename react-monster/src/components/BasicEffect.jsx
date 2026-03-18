import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("I am initialized");
  }, []);

  return <div>BasicEffect</div>;
};
export default BasicEffect;
