import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark mt-5">
      <div className="container py-3">
        <h6 id="nameTitle" className="text-center text-white">
          সাইট ডিজাইন করেছেন{" "}
          <a
            className="text-decoration-none text-danger"
            href="https://www.srdreamlab.com"
          >
            SR Dream Lab
          </a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
