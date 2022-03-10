import "reset-css";
import { AppProps } from "next/app";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

import { Layout } from "../components/layout";
import HeadInfo from "../components/HeadInfo";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadInfo />

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <style jsx global>{`
        :root {
          --container-width: 80rem;
          --container-padding: 1.5rem;
        }

        * {
          box-sizing: border-box;
        }

        body {
          font-family: "Noto Sans KR", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        #__next {
          display: grid;
          grid-template-rows: auto 1fr;
          min-height: 100vh;
        }

        .video-player {
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
        }
      `}</style>
    </>
  );
}
