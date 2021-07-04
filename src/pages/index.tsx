import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>@ts-next</title>
      </Head>
      <div className="grid h-screen font-sans place-content-center bg-gray-50">
        <div className="text-4xl font-black text-gray-900"> 🧀 Happy coding</div>
        <div>
          <h2 className="my-8 font-mono text-center text-blue-500">
            To use this template go to
            <a
              className="mx-2 text-blue-500 underline hover:text-blue-700"
              href="https://github.com/fuadnafiz98/nextjs-starter"
            >
              this repo
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}
