import React from "react";
import Image from "next/image";
import profilePic from "@/images/my-pic.png"; // Replace with your image

const AboutMe = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg ">
      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image
          src={profilePic}
          alt="Profile Picture"
          className="shadow-lg border-4 border-blue-300 rounded-full transition-transform transform hover:scale-110"
          width={450} // Adjust size as needed
          height={450} // Adjust size as needed
        />
      </div>

      {/* About Text */}
      <div className="md:w-1/2 md:pl-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-4 hover:text-blue-600 transition-colors">
          About Me
        </h1>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Hi, I'm <span className="font-semibold text-blue-600">Muhammad Ubaid Hussain</span>, a passionate Front-end Developer dedicated to crafting dynamic and user-centric web experiences. With a strong background in <span className="font-semibold text-blue-600">HTML5, CSS3, TypeScript, React,</span> and <span className="font-semibold text-blue-600">Next.js</span>, I thrive on solving complex tech challenges and integrating state-of-the-art technologies into robust software solutions.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          I am currently focused on exploring <span className="font-semibold text-blue-600">Generative AI</span> and <span className="font-semibold text-blue-600">Cloud Computing</span> to build innovative applications that leverage cutting-edge technologies. My goal is to create scalable and efficient web applications that not only meet business needs but also drive innovation.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, reading about the latest industry trends, or working on personal projects to enhance my skills.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
