import Image from "next/image";
import { VideoItem } from "../../utils/types";

type ThumbnailProps = {
  videoItem: VideoItem;
};

export default function Thumbnail({ videoItem }: ThumbnailProps) {
  const {
    snippet: {
      thumbnails: {
        medium: { url, width, height },
      },
    },
  } = videoItem;

  return (
    <>
      <div>
        <Image
          src={url}
          alt=""
          width={width}
          height={height}
          layout="responsive"
        />
      </div>
    </>
  );
}
