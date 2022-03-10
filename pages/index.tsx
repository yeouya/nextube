import { GetStaticProps } from "next";
import VideoCard from "../components/video-card";
import { VideoData, VideoItem } from "../utils/types";

type HomeProps = {
  videoItems: VideoItem[];
};

export default function Home({ videoItems }: HomeProps) {
  return (
    <>
      <article>
        {videoItems.map((videoItem) => (
          <VideoCard key={videoItem.id} videoItem={videoItem} />
        ))}
      </article>

      <style jsx>{`
        article {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(18rem, auto));
          gap: 3rem 1rem;
        }
      `}</style>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=KR&maxResults=20&key=${process.env.NEXT_PUBLIC_API_KEY}`,
  );
  const { items: videoItems }: VideoData = await response.json();

  return {
    props: {
      videoItems,
    },
    revalidate: 60,
  };
};
