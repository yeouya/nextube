import Link from "next/link";
import VideoCard from "../video-card";
import Metadata from "../video-card/Metadata";
import Thumbnail from "../video-card/Thumbnail";

export default function Video({ video }: any) {
  const { id } = video;

  return (
    <>
      <Link key={id} href={`/videos/${id}`}>
        <a>
          <figure>
            <Thumbnail videoItem={video} />
            <Metadata videoItem={video} />
          </figure>
        </a>
      </Link>

      <style jsx>{`
        figure {
          display: grid;
          grid-template-columns: 10.5rem 1fr;
          gap: 0.5rem;
        }
      `}</style>
    </>
  );
}
