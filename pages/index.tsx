import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Check if access token exists in sessionStorage
    const accessToken = sessionStorage.getItem("accessToken");

    // If access token exists, redirect to /event
    if (accessToken) {
      router.push("/event");
    } else {
      // If access token doesn't exist, redirect to /auth
      router.push("/auth");
    }
  }, [router]);

  return <div>{/* Your component content */}</div>;
}
