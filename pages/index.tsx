import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>@ts-next</title>
      </Head>
      <div className="grid h-screen place-content-center bg-gray-50">
        <div className="text-4xl font-black text-gray-900">🥞 Happy coding</div>
      </div>
    </>
  );
}
