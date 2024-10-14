"us";
import Head from "next/head";

export default function HeadInfo({
  title = "Hello world",
  description = undefined,
  author = undefined,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
