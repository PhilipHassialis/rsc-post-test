import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";

const Page1 = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <h1>Not Logged In</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome Page1</h1>
      <h2>{JSON.stringify(session)}</h2>
    </div>
  );
};

export default Page1;
