import { ReactNode } from "react";
import { Hero, Layout } from "../components";

const Home = () => {
  return (
    <>
      <main className="w-full min-h-[85vh] min-w-[90vh] flex flex-col justify-between">
        <Hero />
      </main>
    </>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <Layout page="Home">{page}</Layout>;
};

export default Home;
