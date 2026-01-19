import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default async function Home() {
  const session = await authClient.getSession();
  console.log(session);

  return (
    <div>
      <h1>This is home</h1>
    </div>
  );
}
