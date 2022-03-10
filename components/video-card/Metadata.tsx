import dayjs from "dayjs";
import { VideoItem } from "../../utils/types";

type MetadataProps = {
  videoItem: VideoItem;
  dateType?: "diff" | "publishedAt";
  fontSize?: "small" | "middle";
};

export default function Metadata({
  videoItem,
  dateType = "diff",
  fontSize = "small",
}: MetadataProps) {
  const {
    snippet: { title, channelTitle, publishedAt },
    statistics: { viewCount },
  } = videoItem;

  const publishedAtDate = dayjs(publishedAt);

  return (
    <>
      <figcaption>
        <p className="title">{title}</p>
        <div className="detail">
          <p>{channelTitle}</p>
          <p>
            <span className="view-count">
              조회수 {Number(viewCount).toLocaleString("ko-KR")}회
            </span>
            <span>
              {dateType === "diff"
                ? publishedAtDate.fromNow()
                : publishedAtDate.format("YYYY. MM. DD")}
            </span>
          </p>
        </div>
      </figcaption>

      <style jsx>{`
        figcaption {
          display: flex;
          flex-direction: column;
          line-height: 1.3;

          gap: ${fontSize === "small" ? "0.4rem" : "0.6rem"};
        }

        .title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;

          font-size: ${fontSize === "small" ? "1rem" : "1.2rem"};
        }

        .detail {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          color: #606060;
          word-break: break-all;

          font-size: ${fontSize === "small" ? "0.8rem" : "0.9rem"};
        }

        .detail > p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .view-count::after {
          content: "•";
          margin: 0 0.25rem;
        }
      `}</style>
    </>
  );
}
