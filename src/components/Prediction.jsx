import React from 'react';
import heart from '../assets/heart1.png';

function Prediction() {
    return (

<div className="bg-gradient-to-b from-orange-200 to-red-200 p-8">
    <h1 className="text-2xl font-bold">Prediction</h1>
    <ul className="list-none p-4">

    <div className="container mr-auto shadow-xl backdrop-filter backdrop-blur-lg shrink-0 flex justify-start h-56 bg-cover bg-center bg-no-repeat bg-opacity-75 rounded-lg" style={{width: "24rem", height: "12rem", backgroundImage: `url(${heart})`}}>

        <div className="flex shrink-0 justify-start items-end">
            <li className="my-4 mb-10">
            <h2 className="mb-8 ml-8 font-bold text-teal-900">Heart Disease <br></br> Prediction</h2>
                <a className="bg-gradient-to-r from-red-700 to-red-500 hover:from-pink-600 hover:to-yellow-500 text-white rounded-md shadow-xl px-4 py-2 ml-8" href="/heart-diseases">Begin</a>
            </li>
        </div>
    </div>


    <div className="container mr-auto shrink-0 h-36 bg-gradient-to-r from-gray-500 to-gray-400 shadow-xl rounded-lg" style={{width: "24rem"}}>
    <h2 className="ml-10 mt-10 font-bold text-gray-100"><br></br>Cancers</h2>
        <div className="flex shrink-0 justify-center items-end mt-3">

            <li className="my-4 mr-4">
                <a className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-teal-600 hover:to-green-500 text-white rounded-md shadow-xl px-4 py-2" href="/lung-cancer">Lung Cancer</a>
            </li>

            <li className="my-4">
                <a className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-teal-600 hover:to-green-500 text-white rounded-md shadow-xl px-4 py-2" href="/breast-cancer">Breast Cancer </a>
            </li>

        </div>
    </div>

    </ul>
</div>
    );
}

export default Prediction;