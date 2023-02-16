import React from 'react';
import { useState, useEffect } from 'react';

function Profile({ handleDataSubmit}) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [unit, setUnit] = useState('metric');
    const [diabetes, setDiabetes] = useState(false);
    const [heartDiseases, setHeartDiseases] = useState(false);
    const [cancer, setCancer] = useState(false);
    const [bloodPressure, setBloodPressure] = useState(false);
    const [kidneyDisease, setKidneyDisease] = useState(false);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState('');
    const [bodyFat, setBodyFat] = useState('');

    const [cWeight, setcWeight] = useState('');
    const [cHeight, setcHeight] = useState('');

    // Send data to server or handle form submission here

    useEffect(() => {
      if (unit === 'imperial') {
        setcWeight(weight * 0.45359237);
        setcHeight(height * 2.54);
        console.log(cWeight, cHeight)
      }
      else {
        setcWeight(weight);
        setcHeight(height);
      }
      if (cWeight && cWeight && cWeight >= 30 && cWeight <= 650 && cHeight <= 300 && cHeight >= 80) {
        const bmiValue = (cWeight / Math.pow(cHeight / 100, 2)).toFixed(1);
        setBMI(bmiValue);
      } else {
        setBMI("");
      }
      if (bmi && sex && age && age <= 120 && age > 0) {
        const bodyFatValue = (1.39*bmi+(0.16*age)-10.34*sex-9).toFixed(1);
        setBodyFat(bodyFatValue+"%");
      } else {
        setBodyFat("");
      }
    }, [weight, height, cWeight, cHeight, unit, sex, age, bmi]);

    const handleSubmit = (e) => {
      e.preventDefault();

      handleDataSubmit({cWeight, cHeight});
    };
  
    return (
      <div className="bg-white p-6 rounded-lg">

        <div className="bg-blue-100 rounded-lg py-5 mx-auto px-4 w-5/6 mb-6">
          <p className="text-center font-medium text-black">Note: Feature under development. Upon completion, info saved here will be used on predictions across the platform automatically.</p>
        </div>

        <div className="flex justify-center">
          <div className="bg-gradient-to-b from-blue-700 to-blue-400 w-5/6 rounded-lg p-4 text-white font-medium text-center shadow-lg">
            <p className="text-xl">BMI:</p>
            <p className="text-5xl mb-4">{bmi}</p>
            <p className="text-xl">Body Fat:</p>
            <p className="text-5xl mb-4">{bodyFat}</p>
            <p className="text-xs">These are general metrics of your body composition estimated from the data provided</p>
          </div>
        </div>



        <form onSubmit={handleSubmit} className="ml-4 mb-4">
          <div className="flex-col mt-8 mb-2">
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

          <div className="flex items-center mb-4 mt-3">
        <label htmlFor="sex" className="mr-2">
          Biological Sex:
        </label>
        <select id="sex" name="sex" value={sex} onChange={(e) => setSex(e.target.value)} className="border-2 border-gray-600 rounded-md px-2 py-1">
          <option value="">Select</option>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
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
  <div className="grid grid-cols-auto-fit grid-auto-rows-1 gap-4 mb-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}>
    <button
      className={`px-2 py-1 rounded-md ${diabetes ? 'bg-blue-500 text-white' : 'bg-blue-100 text-gray-700'}`}
      onClick={() => setDiabetes(!diabetes)}
    >
      Diabetes
    </button>
    <button
      className={`px-2 py-1 rounded-md ${heartDiseases ? 'bg-blue-500 text-white' : 'bg-blue-100 text-gray-700'}`}
      onClick={() => setHeartDiseases(!heartDiseases)}
    >
      Heart Diseases
    </button>
    <button
      className={`px-2 py-1 rounded-md ${cancer ? 'bg-blue-500 text-white' : 'bg-blue-100 text-gray-700'}`}
      onClick={() => setCancer(!cancer)}
    >
      Cancer
    </button>
    <button
      className={`px-2 py-1 rounded-md ${bloodPressure ? 'bg-blue-500 text-white' : 'bg-blue-100 text-gray-700'}`}
      onClick={() => setBloodPressure(!bloodPressure)}
    >
      High Blood Pressure
    </button>
    <button
      className={`px-2 py-1 rounded-md ${kidneyDisease ? 'bg-blue-500 text-white' : 'bg-blue-100 text-gray-700'}`}
      onClick={() => setKidneyDisease(!kidneyDisease)}
    >
      Kidney Disease
    </button>
  </div>
  <button className="bg-blue-500 text-white w-20 py-2 px-4 rounded-lg hover:bg-blue-600">Save</button>
</div>


                    </form>
                </div>
            );
        }

export default Profile;
