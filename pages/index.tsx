import { ReactNode } from "react";
import { Hero, Layout } from "../components";

const Home = () => {
  return (
    <>
      <main className="w-full min-h-scren min-w-[90vh] flex items-center justify-center flex-col">
        <Hero />
      </main>
    </>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <Layout page="Home">{page}</Layout>;
};

export default Home;
