import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <h1>Welcome to express-server app</h1>
      <hr />
      <Link href={"/events"} passHref>
        <a>Go to events page</a>
      </Link>
    </>
  );
};

export default Home;
