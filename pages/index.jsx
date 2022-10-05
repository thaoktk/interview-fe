import dynamic from "next/dynamic";
import Head from "next/head";

const Form = dynamic(() => import("../components/Form"));

const ShiftView = dynamic(() => import("../components/ShiftView"));

export default function Home() {
  return (
    <div className="bg-secondary px-5 md:px-10 py-8 min-h-screen">
      <div className="max-w-screen-2xl">
        <div className="">
          <Head>
            <title>Front End Challenge</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Form />
          <ShiftView />
        </div></div>
    </div>

  );
}
