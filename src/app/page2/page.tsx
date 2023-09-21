import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";

const Page2 = async () => {
  const myCookies = cookies();
  const secret = myCookies.get("next-auth.session-token");

  const messageRes = await fetch("http://localhost:3000/api/demopost", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret?.value}`,
    },
  });
  const message = await messageRes.json();

  return (
    <div>
      <h1>Welcome Page2</h1>
      <h2>Message {message.message}</h2>
    </div>
  );
};

export default Page2;
