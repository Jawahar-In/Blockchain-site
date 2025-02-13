import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={styles.main}>
        <h1>Welcome to the Blockchain Website</h1>
        <p>This site will showcase blockchain content in various formats.</p>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  main: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default App;
