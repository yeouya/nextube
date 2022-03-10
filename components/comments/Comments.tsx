import Comment from "./Comment";

export default function Comments({ comments }: any) {
  return (
    <>
      <article>
        {comments.map((comment: any) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </article>

      <style jsx>{`
        article {
          grid-area: comments;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin: 1rem 0;
        }
      `}</style>
    </>
  );
}
