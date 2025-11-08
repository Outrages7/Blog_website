import React, { useContext, useEffect } from "react";
import Header from "./Components/Header";
import Blogs from "./Components/Blog";
import Footer from "./Components/Footer";
import { AppContext } from "./Context/AppContext";

function App() {
  const { fetchBlog } = useContext(AppContext);

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow px-4 py-8 pb-24 overflow-y-auto">
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
