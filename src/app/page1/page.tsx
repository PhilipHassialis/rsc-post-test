"use client";

import { useEffect, useState } from "react";

const Page1 = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const messageRes = await fetch("http://localhost:3000/api/demopost", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const message = await messageRes.json();
      setMessage(message.message);
    };
    if (message === "") {
      fetchMessage();
    }
  }, []);

  return (
    <div>
      <h1>Welcome Page1</h1>
      <h2>{`Message: ${message}`}</h2>
    </div>
  );
};

export default Page1;
