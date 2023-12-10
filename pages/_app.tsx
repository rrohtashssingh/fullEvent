import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "../style/globals.css";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // useEffect(() => {
  //   // Check if access token exists in sessionStorage
  //   const accessToken = sessionStorage.getItem("accessToken");
  //   const profileSetup = sessionStorage.getItem("profilesetup");

  //   if (!accessToken) {
  //     router.push("/auth");
  //   } else {
  //     if (!profileSetup) {
  //       router.push("/profileSetup");
  //     } else {
  //       router.push("/events");
  //     }
  //   }
  // }, [router]);

  // Check if the current route is under /auth
  const isAuthPage = router.pathname.startsWith("/auth");
  return !isAuthPage ? (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="mt-20 mb-20">
        <Component {...pageProps} />
      </div>
    </Layout>
  ) : (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
