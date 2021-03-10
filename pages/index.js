import Head from "next/head";
import Introduction from "../containers/Introduction/Introduction";

export default function Home() {
  const short = true;

  return (
    <>
      <Head>
        <title>Paula Himanen | Koti</title>
        <meta
          name="Paula Himanen Kotisivu"
          content="Paula Himanen Kotisivu"
        ></meta>
      </Head>
      <div>
        <Introduction short={short} readMorePath="/paula" />
      </div>
    </>
  );
}
