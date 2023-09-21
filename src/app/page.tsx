import {
  LoginButton,
  RegisterButton,
  LogoutButton,
  ProfileButton,
} from "@/components/buttons";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}
