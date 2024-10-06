import React from "react";
import Image from "next/image";
import Container from "@/components/container"; // Adjust the import according to your structure

const Features = () => {
  const featureList = [
    {
      title: "Responsive Design",
      description:
        "Our blog is fully responsive, ensuring a great experience on all devices, from desktop to mobile.",
      image: "/responsive.png", // Ensure these paths are correct
    },
    {
      title: "User-Friendly Interface",
      description:
        "Navigate effortlessly through our clean and intuitive interface that enhances your reading experience.",
      image: "/user-friendly.jpeg",
    },
    {
      title: "Search Functionality",
      description:
        "Easily find your favorite articles with our powerful search feature that filters content quickly.",
      image: "/search.png",
    },
    {
      title: "SEO Optimized",
      description:
        "Our blog is optimized for search engines, helping your content reach a wider audience.",
      image: "/seo.png",
    },
  ];

  return (
    <Container className="py-20 px-10 bg-gray-100">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-blue-600">
        Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {featureList.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={400} // Adjust width according to your design
              height={300} // Adjust height according to your design
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h2>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Features;
