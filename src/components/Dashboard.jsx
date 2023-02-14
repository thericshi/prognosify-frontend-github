import React, { useState, useEffect } from 'react';
import banner from '../assets/prognosify-banner-cropped.jpg';

function Dashboard() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleWindowScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

    return (
      <div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center", height: "90vh" }}>
      <section 
        className="bg-white bg-opacity-90 mb-8 backdrop-filter backdrop-blur-lg rounded-lg py-16 shadow-lg hover:shadow-xl hover:bg-white hover:text-black container hover:scale-105 transition-transform duration-300"
        style={{ width: "55%", color: "#333", padding: "3rem", opacity: 1.3 - (scrollY / 300) }}
      >
        <h1 className="text-3xl font-bold text-center">Welcome to Prognosify</h1>
        <p className="text-center text-gray-600 mt-4">Take control of your health with personalized predictions and suggestions</p>
      </section>
    </div>
      <div className="">

        <div className="bg-gradient-to-b from-teal-400 to-cyan-700 p-8">


      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4">
              <div className="bg-white p-6 mb-3 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-white hover:text-black container hover:scale-105 transition-transform duration-300">
                <h2 className="text-lg font-medium">Disease Risk Prediction</h2>
                <p className="text-gray-600">Our machine learning algorithm analyzes your lifestyle factors to predict your risk of major preventable diseases.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <div className="bg-white p-6 mb-3 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-white hover:text-black container hover:scale-105 transition-transform duration-300">
                <h2 className="text-lg font-medium">Health Suggestions</h2>
                <p className="text-gray-600">Receive tailored lifestyle recommendations based on your specific risk factors.</p> <br></br>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <div className="bg-white p-6 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-white hover:text-black container hover:scale-105 transition-transform duration-300">
                <h2 className="text-lg font-medium">Continuous Monitoring</h2>
                <p className="text-gray-600">Track the changes in your lifestyle over time to see the progress in improving your health.</p> <br></br>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
        </div>
        </div>
    );
}

export default Dashboard;
