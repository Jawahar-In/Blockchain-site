import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Blockchain Hub</h1>
      <ul style={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">Infographics</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Posters</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: { fontSize: "24px", fontWeight: "bold" },
  navLinks: { listStyle: "none", display: "flex", gap: "20px" },
};

export default Navbar;
