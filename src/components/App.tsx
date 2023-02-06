import React from "react";
import { Hero, Navbar } from ".";

const App = () => {
  return (
    <main className="w-full min-h-[90vh] min-w-[90vh]">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
