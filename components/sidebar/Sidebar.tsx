import Video from "./Video";

export default function Sidebar({ videos }: any) {
  return (
    <>
      <aside>
        {videos.map((video: any) => (
          <Video key={video.id} video={video} />
        ))}
      </aside>

      <style jsx>{`
        aside {
          grid-area: recommended;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .hoho {
          flex-direction: row;
        }
      `}</style>
    </>
  );
}
