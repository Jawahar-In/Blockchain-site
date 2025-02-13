import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Blockchain Hub | All Rights Reserved</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#333",
    color: "#fff",
    marginTop: "50px",
  },
};

export default Footer;
