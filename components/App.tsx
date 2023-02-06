import React from "react";
import { Footer, Hero, Navbar } from ".";

const App = () => {
  return (
    <main className="w-full min-h-[95vh] min-w-[90vh] flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
};

export default App;
