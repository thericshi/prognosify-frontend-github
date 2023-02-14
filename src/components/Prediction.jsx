import React from 'react';
import { useState, useEffect } from 'react';
import heart from '../assets/heart1.png';
import cancer from '../assets/cancer.png';
//import lab from '../assets/lab-bg-blur.png'

function Prediction() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    };
    
    if (screenWidth/screenHeight <= 0.9) {
        return (
            //<div className="min-h-screen bg-cover bg-center  p-8" style={{ backgroundImage: `url(${lab})` }}>
        
            <div className="bg-gradient-to-b from-orange-200 to-red-200 p-8">
            <h1 className="text-2xl text-black font-bold">Prediction</h1>
            <ul className="list-none p-4">
        
            
        <div className="container m-auto shadow-xl backdrop-filter backdrop-blur-lg shrink-0 flex justify-start h-56 bg-cover bg-center bg-no-repeat bg-opacity-75 rounded-lg" style={{width: "18rem", height: "12rem", backgroundImage: `url(${heart})`}}>
            <div className="flex shrink-0 justify-center items-end">
                <li className="my-4 mb-10">
                <h2 className="mb-8 ml-8 font-bold text-teal-900">Heart Disease <br></br> Prediction</h2>
                    <a className="bg-gradient-to-r from-red-700 to-red-500 hover:from-pink-600 hover:to-yellow-500 text-white font-medium rounded-md shadow-xl px-4 py-2 ml-8" href="#/heart-diseases">Begin</a>
                </li>
            </div>
        </div>

        
        
            <div className="container m-auto shadow-xl backdrop-filter backdrop-blur-lg shrink-0 justify-end h-56 bg-cover bg-center bg-no-repeat bg-opacity-75 rounded-lg" style={{width: "18rem", height: "12rem", backgroundImage: `url(${cancer})`, backgroundPosition: "0px center"}}>
            <h2 className="ml-36 mt-10 px-8 py-2 font-bold text-white"><br></br>Cancers</h2>
                <div className="shrink-0 ml-36 align-right justify-center">
        
                    <li className="my-5 mx-1">
                        <a className="bg-gradient-to-b from-white to-blue-100 hover:from-blue-700 hover:to-blue-500 hover:text-white text-blue-500 font-medium rounded-md shadow-xl px-4 py-2" href="#/lung-cancer">Lung Cancer</a>
                    </li>
        
                    <li className="my-4">
                        <a className="bg-gradient-to-b from-white to-blue-100 hover:from-blue-700 hover:to-blue-500 hover:text-white text-blue-500 font-medium rounded-md shadow-xl px-4 py-2" href="#/breast-cancer">Breast Cancer </a>
                    </li>
        
                </div>
            </div>
        
            </ul>
        </div>
            );
    } else {
    return (
    //<div className="min-h-screen bg-cover bg-center  p-8" style={{ backgroundImage: `url(${lab})` }}>

    <div className="bg-gradient-to-b from-orange-200 to-red-200 p-8">
    <h1 className="text-2xl text-black font-bold">Prediction</h1>
    <ul className="list-none p-4">

    
    <div className="container mr-auto shadow-xl backdrop-filter backdrop-blur-lg shrink-0 flex justify-start h-56 bg-cover bg-center bg-no-repeat bg-opacity-75 rounded-lg" style={{width: "24rem", height: "12rem", backgroundImage: `url(${heart})`}}>

        <div className="flex shrink-0 justify-start items-end">
            <li className="my-4 mb-10">
            <h2 className="mb-8 ml-8 font-bold text-teal-900">Heart Disease <br></br> Prediction</h2>
                <a className="bg-gradient-to-r from-red-700 to-red-500 hover:from-pink-600 hover:to-yellow-500 text-white font-medium rounded-md shadow-xl px-4 py-2 ml-8" href="#/heart-diseases">Begin</a>
            </li>
        </div>
    </div>


    <div className="container mr-auto shadow-xl backdrop-filter backdrop-blur-lg shrink-0 justify-end h-56 bg-cover bg-center bg-no-repeat bg-opacity-75 rounded-lg" style={{width: "24rem", height: "12rem", backgroundImage: `url(${cancer})`}}>
    <h2 className="ml-56 mt-10 px-8 py-2 font-bold text-white"><br></br>Cancers</h2>
        <div className="shrink-0 ml-56 align-right justify-center">

            <li className="my-5 mx-1">
                <a className="bg-gradient-to-b from-white to-blue-100 hover:from-blue-700 hover:to-blue-500 hover:text-white text-blue-500 font-medium rounded-md shadow-xl px-4 py-2" href="#/lung-cancer">Lung Cancer</a>
            </li>

            <li className="my-4">
                <a className="bg-gradient-to-b from-white to-blue-100 hover:from-blue-700 hover:to-blue-500 hover:text-white text-blue-500 font-medium rounded-md shadow-xl px-4 py-2" href="#/breast-cancer">Breast Cancer </a>
            </li>

        </div>
    </div>

    </ul>
</div>
    );
}}

export default Prediction;