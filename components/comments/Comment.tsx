import dayjs from "dayjs";
import Image from "next/image";
import { MdOutlineThumbDown, MdOutlineThumbUp } from "react-icons/md";

export default function Comment({ comment }: any) {
  const {
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    textOriginal,
    likeCount,
  } = comment.snippet.topLevelComment.snippet;

  return (
    <>
      <article>
        <div className="profile-image-container">
          <Image
            src={authorProfileImageUrl}
            alt=""
            width={48}
            height={48}
            layout="responsive"
          />
        </div>
        <p className="metadata">
          <span>{authorDisplayName}</span>
          <span>{dayjs(publishedAt).fromNow()}</span>
        </p>
        <p className="comment">{textOriginal}</p>
        <div className="thumb">
          <div className="thumb-up">
            <button type="button">
              <MdOutlineThumbUp />
            </button>
            <span> {likeCount}</span>
          </div>
          <div className="thumb-down">
            <button type="button">
              <MdOutlineThumbDown />
            </button>
          </div>
        </div>
      </article>

      <style jsx>{`
        article {
          display: grid;
          grid-template-columns: 2.5rem 1fr;
          grid-template-areas:
            "profile-image metadata"
            "profile-image comment"
            "profile-image thumb";
          align-items: start;
          gap: 0.6rem 1rem;
        }

        .profile-image-container {
          grid-area: profile-image;
          border-radius: 50%;
          overflow: hidden;
        }

        .metadata {
          grid-area: metadata;
          display: flex;
          gap: 0.5rem;
        }

        .comment {
          grid-area: comment;
        }

        .thumb {
          grid-area: thumb;
          display: flex;
          gap: 0.8rem;
          margin: 0.5rem 0;
        }

        .thumb-up,
        .thumb-down {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        button {
          display: flex;
          place-items: center;
          background: none;
          border: none;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
