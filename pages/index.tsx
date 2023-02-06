import { Layout } from "lucide-react";
import { ReactNode } from "react";
import { Navbar, Hero, Footer, MainContent } from "../components";

const App = () => {
  return (
    <>
      <main className="w-full min-h-[95vh] min-w-[90vh] flex flex-col justify-between">
        <Navbar />
        <Hero />
        <MainContent />
        <Footer />
      </main>
    </>
  );
};

App.getLayout = (page: ReactNode) => {
  return <Layout page="Home">{page}</Layout>;
};

export default App;
