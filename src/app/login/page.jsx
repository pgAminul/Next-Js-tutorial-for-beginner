"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();

  const handleGithubLogIn = () => {
    signIn("github", { callbackUrl: "/" });
  };

  const handleGithubLogOut = () => {
    signOut();
  };

  if (session) {
    return (
      <>
        Signed in as {session.user} <br />
        <button onClick={handleGithubLogOut}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={handleGithubLogIn}>Sign in</button>
    </>
  );
}
