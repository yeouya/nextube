import Link from "next/link";
import { VideoItem } from "../../utils/types";
import Metadata from "./Metadata";
import Thumbnail from "./Thumbnail";

type VideoCardProps = {
  videoItem: VideoItem;
  direction?: "column" | "row";
};

export default function VideoCard({
  videoItem,
  direction = "column",
}: VideoCardProps) {
  const { id } = videoItem;

  return (
    <>
      <Link key={id} href={`/videos/${id}`}>
        <a>
          <figure>
            <Thumbnail videoItem={videoItem} />
            <Metadata videoItem={videoItem} />
          </figure>
        </a>
      </Link>

      <style jsx>{`
        figure {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
      `}</style>
    </>
  );
}
