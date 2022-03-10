import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import YouTube from "react-youtube";
import { Comments } from "../../components/comments";
import { Sidebar } from "../../components/sidebar";
import Metadata from "../../components/video-card/Metadata";
import { VideoData, VideoItem } from "../../utils/types";

type VideoProps = {
  videoItem: VideoItem;
};

type VideoParams = {
  id: string;
};

export default function Video({ videoItem, commentItems, videos }: any) {
  const {
    id,
    snippet: { title },
  } = videoItem;

  return (
    <>
      <Head>
        <title>{title} - NexTube</title>
      </Head>

      <div className="container">
        <figure>
          <YouTube videoId={id} className="video-player" />
          <Metadata
            videoItem={videoItem}
            dateType="publishedAt"
            fontSize="middle"
          />
        </figure>
        <Comments comments={commentItems} />
        <Sidebar videos={videos} />
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 25rem;
          grid-template-rows: auto 1fr;
          grid-template-areas:
            "video    recommended"
            "comments recommended";
          align-items: start;
          gap: 0 1.5rem;
        }

        figure {
          --gap: 1rem;

          grid-area: video;
          display: flex;
          flex-direction: column;
          gap: var(--gap);
        }

        figure::after {
          content: "";
          height: 0.1rem;
          margin-bottom: var(--gap);
          background-color: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<VideoParams> = async () => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=KR&maxResults=20&key=${process.env.NEXT_PUBLIC_API_KEY}`,
  );
  const { items }: VideoData = await response.json();
  const paths = items.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<VideoProps, VideoParams> = async ({
  params: { id } = {},
}) => {
  const videoResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${process.env.NEXT_PUBLIC_API_KEY}`,
  );
  const {
    items: [videoItem],
  }: VideoData = await videoResponse.json();

  const commentResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${id}&key=${process.env.NEXT_PUBLIC_API_KEY}`,
  );
  const { items: commentItems } = await commentResponse.json();

  const videosResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=KR&maxResults=20&key=${process.env.NEXT_PUBLIC_API_KEY}`,
  );
  const { items: videos }: VideoData = await videosResponse.json();

  return {
    props: {
      videoItem,
      commentItems,
      videos,
    },
    revalidate: 60,
  };
};
