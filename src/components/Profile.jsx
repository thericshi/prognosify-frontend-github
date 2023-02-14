import React from 'react';
import { useState } from 'react';

function Profile({ handleDataSubmit}) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [unit, setUnit] = useState('metric');
    const [diabetes, setDiabetes] = useState(false);
    const [heartDiseases, setHeartDiseases] = useState(false);
    const [cancer, setCancer] = useState(false);
    const [bloodPressure, setBloodPressure] = useState(false);
    const [kidneyDisease, setKidneyDisease] = useState(false);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const [cWeight, setcWeight] = useState('');
    const [cHeight, setcHeight] = useState('');

    // Send data to server or handle form submission here


    const handleSubmit = (e) => {
      e.preventDefault();

      if (unit === 'imperial') {
        setcWeight(weight * 0.45359237);
        setcHeight(height * 2.54);
        console.log(cWeight, cHeight)
      }

      handleDataSubmit({cWeight, cHeight});
    };
  
    return (
      <div className="bg-white p-6 rounded-lg">

        <div className="bg-blue-100 rounded-lg py-5 mx-auto max-w-5xl mb-8">
          <p className="text-center font-medium text-black">Note: Feature under development. Upon completion, info saved here will be used on predictions across the platform automatically.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex-col mb-2">
            <div className="flex">
              <label className="block font-medium mr-2">Name:</label>
                <input
                  className="border-2 border-gray-600 rounded-md w-64 h-6 px-3 mr-8 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
            </div>
            <label className="block font-medium mt-1">
              Age:
              <input
                className="border-2 border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
          </div>
          <div className="flex">
            <label className="block font-medium mb-2 mr-2">
              Weight:
              <input
                className="border-2 border-gray-300 rounded-md w-full py-2 px-3 mr-1 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <select
                className="border-2 border-gray-300 rounded-md h-8 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="metric">kg</option>
                <option value="imperial">lbs</option>
              </select>
            </label>
            <label className="block font-medium mb-2">
              Height:
              <input
                className="border-2 border-gray-300 rounded-md w-full py-2 px-3 mr-1 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <select
                className="border-2 border-gray-300 rounded-md h-8 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="metric">cm</option>
                <option value="imperial">in</option>
              </select>
            </label>
          </div>
              <div className="flex flex-col">
                <div className="mb-2 font-medium">Medical History:</div>
                <div className="flex mb-2">
                  <input
                    type="checkbox"
                    checked={diabetes}
                    onChange={() => setDiabetes(!diabetes)}
                    className="mr-2"
                    />
                    <div>Diabetes</div>
                    </div>
                    <div className="flex mb-2">
                    <input
                    type="checkbox"
                    checked={heartDiseases}
                    onChange={() => setHeartDiseases(!heartDiseases)}
                    className="mr-2"
                    />
                    <div>Heart Diseases</div>
                    </div>
                    <div className="flex mb-2">
                    <input
                    type="checkbox"
                    checked={cancer}
                    onChange={() => setCancer(!cancer)}
                    className="mr-2"
                    />
                    <div>Cancer</div>
                    </div>
                    <div className="flex mb-2">
                    <input
                    type="checkbox"
                    checked={bloodPressure}
                    onChange={() => setBloodPressure(!bloodPressure)}
                    className="mr-2"
                    />
                    <div>High Blood Pressure</div>
                    </div>
                    <div className="flex mb-2">
                    <input
                    type="checkbox"
                    checked={kidneyDisease}
                    onChange={() => setKidneyDisease(!kidneyDisease)}
                    className="mr-2"
                    />
                    <div>Kidney Disease</div>
                    </div>
                    </div>
                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Save</button>
                    </form>
                </div>
            );
        }

export default Profile;
