import React, { useEffect, useState } from "react";

const TodoDate = () => {
  const [toTime, setToTime] = useState(0);

  useEffect(() => {
    const inInterval = setInterval(() => {
      const now = new Date();
      const nowDate = now.toLocaleDateString();
      const nowTime = now.toLocaleTimeString();
      setToTime(`${nowDate} - ${nowTime}`);
    }, 1000);

    return () => clearInterval(inInterval);
  }, []);

  return <div><h2 className="mt-5 text-2xl">{toTime}</h2></div>;
};

export default TodoDate;
