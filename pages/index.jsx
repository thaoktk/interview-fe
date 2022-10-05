import dynamic from "next/dynamic";
import Head from "next/head";

const Form = dynamic(() => import("../components/App/Form"), {
  ssr: false,
});

const ShiftView = dynamic(() => import("../components/App/ShiftView"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Front End Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form />
      <ShiftView />
    </div>
  );
}