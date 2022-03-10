import Head from "next/head";

export default function HadeInfo({ title = "NexTube" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="NexTube에서 마음에 드는 동영상과 음악을 감상하고, 직접 만든 콘텐츠를 업로드하여 친구, 가족뿐 아니라 전 세계 사람들과 콘텐츠를 공유할 수 있습니다."
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}
