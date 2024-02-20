import React, { useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  const handleClick = () => {
    setCounter(counter + 1);
  };

  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={handleClick}>Counter {counter}</button>
      <p>{children}</p>
    </>
  );
};

export default Button;
