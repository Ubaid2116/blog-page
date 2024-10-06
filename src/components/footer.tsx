import React from "react";
import Container from "./container";
import Logo from "./logo";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 py-8 border-t border-gray-700">
      <Container className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <Logo title="Bloggers" className="text-white text-2xl" />
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mb-6 md:mb-0">
          <Link href="https://www.linkedin.com/in/muhammad-ubaid-hussain-6a6054290/" passHref>
            <AiFillLinkedin className="text-2xl hover:text-blue-600 duration-300 transform hover:scale-110" />
          </Link>
          <Link href="https://twitter.com" passHref>
            <AiOutlineTwitter className="text-2xl hover:text-blue-400 duration-300 transform hover:scale-110" />
          </Link>
          <Link href="https://github.com" passHref>
            <AiFillGithub className="text-2xl hover:text-white duration-300 transform hover:scale-110" />
          </Link>
          <Link href="https://instagram.com" passHref>
            <AiFillInstagram className="text-2xl hover:text-pink-500 duration-300 transform hover:scale-110" />
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-center text-sm text-gray-400 md:text-right">
          © 2024 Muhammad Ubaid Hussain. All rights reserved.{" "}
          <Link
            href="https://www.linkedin.com/in/muhammad-ubaid-hussain-6a6054290/"
            target="blank"
            className="hover:text-white font-semibold duration-200"
          >
            LinkedIn
          </Link>
          
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
