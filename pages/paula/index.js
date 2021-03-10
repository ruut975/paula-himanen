import Head from "next/head";
import Introduction from "../../containers/Introduction/Introduction";

const Paula = () => {
  const short = false;

  return (
    <>
      <Head>
        <title>Esittely | Paula Himanen</title>
        <meta
          name="Paula Himanen Esittely"
          content="Paula Himanen Esittely"
        ></meta>
      </Head>
      <div>
        <Introduction short={short} />
      </div>
    </>
  );
};

export default Paula;
