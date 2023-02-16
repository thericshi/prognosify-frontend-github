import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="justify-center flex flex-wrap">
          <div className="w-full md:w-1/2 mr-12 ml-8 text-center md:text-left">
            <h2 className="text-lg font-medium">About Us</h2>
            <p className="text-gray-500">Prognosify is a web-based application that utilizes machine learning to predict an individual's risk of certain diseases and provide personalized lifestyle suggestions. Our goal is to empower individuals with the knowledge and tools to take proactive steps towards their health, thus reducing the burden of preventable long-term health problems on both the individual and the healthcare system.</p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-lg font-medium">Contact Us</h2>
            <ul className="list-reset">
              <li className="text-gray-500">Email: prognosify@gmail.com</li>
            </ul>
          </div>
</div>
<div className="text-center py-4">
<p className="text-gray-500">Copyright © {new Date().getFullYear()} Prognosify</p>
</div>
</div>
</footer>
);
};

export default Footer;
