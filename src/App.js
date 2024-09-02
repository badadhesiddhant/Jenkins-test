import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
