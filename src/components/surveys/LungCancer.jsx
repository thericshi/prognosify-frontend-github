import React, { useState } from 'react';
import Modal from 'react-modal';

import bg_land from '../../assets/land-bg1.png';

function LungCancer() {

const [Gender, setGender] = useState("");
const [AirPollution, setAirPollution] = useState("");
const [AlcoholUse, setAlcoholUse] = useState("");
const [DustAllergy, setDustAllergy] = useState("");
const [GeneticRisk, setGeneticRisk] = useState("");
const [ChronicLungDisease, setChronicLungDisease] = useState("");
const [BalancedDiet, setBalancedDiet] = useState("");
const [Obesity, setObesity] = useState("");
const [PassiveSmoker, setPassiveSmoker] = useState("");

const [page, setPage] = useState("survey");

const [modalIsOpen, setModalIsOpen] = useState(false);

const [risk, setRisk] = useState("--");

const messages = [
    {
    condition: AirPollution === "0",
    message: "Exposure to high levels of air pollution, particularly from fine particulate matter (PM2.5) and nitrogen dioxide (NO2), can increase the risk of lung cancer. To reduce your risk, consider avoiding heavily polluted areas and staying indoors during times of high air pollution. Additionally, supporting policies and regulations that aim to reduce air pollution can also have a positive impact on your health."
    },
    {
    condition: AlcoholUse === "2",
    message: "Heavy alcohol consumption, defined as more than 2 drinks per day for men and more than 1 drink per day for women, can increase the risk of lung cancer. To reduce your risk, consider limiting your alcohol intake and drinking in moderation. If you are unable to limit your alcohol intake, consider seeking help from a healthcare professional."
    },
    {
    condition: BalancedDiet === "0",
    message: "Not having a balanced diet, which is high in fruits, vegetables, whole grains, and lean protein sources and low in processed foods and saturated fat, can increase the risk of lung cancer. To reduce your risk, consider making dietary changes such as incorporating more fruits, vegetables, and whole grains into your diet and limiting processed foods and saturated fat. Additionally, consider consulting with a registered dietitian to develop a personalized eating plan."
    },
    {
    condition: Obesity === "2",
    message: "Being obese, which is defined as having a body mass index (BMI) greater than 30, can increase the risk of lung cancer. To reduce your risk, consider making lifestyle changes such as increasing physical activity and reducing calorie intake to achieve a healthy weight. Additionally, consider consulting with a healthcare professional to develop a personalized plan for weight management."
    },
    {
    condition: PassiveSmoker === "2",
    message: "Exposure to both first and secondhand smoke can increase the risk of lung cancer. To reduce your risk, it is important to quit smoking and avoid prolonged exposure to smoke from any sources. Consider seeking help from a healthcare professional to quit smoking and Additionally, supporting policies and regulations that aim to reduce smoking exposure can also have a positive impact on your health."
    },
    ];

const [displayedMessages, setDisplayedMessages] = useState([]);

const coefficients = {
  Gender: -0.05,
  AirPollution: -0.035,
  AlcoholUse: 0.03,
  DustAllergy: -0.01,
  GeneticRisk: 0.02,
  ChronicLungDisease: -0.025,
  BalancedDiet: -0.017,
  Obesity: 0.1,
  PassiveSmoker: 0.24
}

const handleSubmit = (e) => {
e.preventDefault();const data = {
    Gender, AirPollution, AlcoholUse, DustAllergy, GeneticRisk, ChronicLungDisease, BalancedDiet, Obesity, PassiveSmoker
  }
  // console.log(data);
  
    // Check if any of the fields are empty
    for (const value of Object.values(data)) {
      if (value === "") {
        setModalIsOpen(true);
        return;
      }
    }
  
  
  // Filter messages to display
  // const newMessages = messages.filter(message => message.condition);

  let messagesToDisplay = []
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].condition) {
      messagesToDisplay.push(messages[i].message);
    }
  }
  setDisplayedMessages(messagesToDisplay);
  setPage("result");

  let riskScore = 0;
  riskScore += (Gender * coefficients.Gender);
  riskScore += (AirPollution * coefficients.AirPollution);
  riskScore += (AlcoholUse * coefficients.AlcoholUse);
  riskScore += (DustAllergy * coefficients.DustAllergy);
  riskScore += (GeneticRisk * coefficients.GeneticRisk);
  riskScore += (ChronicLungDisease * coefficients.ChronicLungDisease);
  riskScore += (BalancedDiet * coefficients.BalancedDiet);
  riskScore += (Obesity * coefficients.Obesity);
  riskScore += (PassiveSmoker * coefficients.PassiveSmoker);

  const probability = (0.4) / (1 + 10 * Math.exp(0.3-4*riskScore));
  setRisk(probability);

}

return (
<div>
    
<Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      backgroundColor: 'white',
      width: '23rem',
      height: '12rem',
      padding: '20px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: 'auto'
    }
  }}
>
  <p className="text-center mt-7 text-lg font-medium">Please complete all fields before submitting</p>
  <button className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-1 px-2 mt-5 rounded-lg" onClick={() => setModalIsOpen(false)}>Close</button>
</Modal>


{page === "survey" ? (
    <div className="bg-gray-200 min-h-screen p-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bg_land})`}}>
          <h1>Lung Cancer Risk Assessment</h1>
      <form className="bg-white p-4 rounded-lg shadow-lg bg-opacity-80" onSubmit={handleSubmit}>

    <div className="mb-4">
<label className="block text-gray-700 font-medium mb-2">Gender</label>
    <div className="flex">
            <input type="radio" name="gender" value={0} onChange={(e) => setGender(e.target.value)} /><label className="ml-2">Male</label>
            <input type="radio" name="gender" value={1} onChange={(e) => setGender(e.target.value)} />
            <label className="ml-2">Female</label>
        </div>
    </div>

    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">High air pollution</label>
        <div className="flex">
                <input type="radio" name="airpollution" value={0} onChange={(e) => setAirPollution(e.target.value)} />
                <label className="ml-2">Yes</label>
                <input type="radio" name="airpollution" value={1} onChange={(e) => setAirPollution(e.target.value)} />
                <label className="ml-2">No</label>
        </div>
    </div>

    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Alcohol Use</label>
        <div className="flex">
            <input type="radio" name="alcoholuse" value={0} onChange={(e) => setAlcoholUse(e.target.value)} />
            <label className="ml-2">Never</label>
            <input type="radio" name="alcoholuse" value={1} onChange={(e) => setAlcoholUse(e.target.value)} />
            <label className="ml-2">Light</label>
            <input type="radio" name="alcoholuse" value={2} onChange={(e) => setAlcoholUse(e.target.value)} />
            <label className="ml-2">Heavy</label>
        </div>
        </div>

        <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">Dust Allergy</label>
    <div className="flex">
        <input type="radio" name="dustallergy" value={1} onChange={(e) => setDustAllergy(e.target.value)} />
        <label className="ml-2">Yes</label>
        <input type="radio" name="dustallergy" value={0} onChange={(e) => setDustAllergy(e.target.value)} />
        <label className="ml-2">No</label>
    </div>
</div>

<div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Genetic Risk</label>
<div className="flex">
<input type="radio" name="geneticrisk" value={1} onChange={(e) => setGeneticRisk(e.target.value)} />
<label className="ml-2">Yes</label>
<input type="radio" name="geneticrisk" value={0} onChange={(e) => setGeneticRisk(e.target.value)} />
<label className="ml-2">No</label>
</div>
</div>

<div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Chronic Lung Diseases</label>
        <div className="flex">
        <input type="radio" name="lunginfection" value={1} onChange={(e) => setChronicLungDisease(e.target.value)} />
        <label className="ml-2">Yes</label>
        <input type="radio" name="lunginfection" value={2} onChange={(e) => setChronicLungDisease(e.target.value)} />
        <label className="ml-2">No</label>
        </div>
        </div>

<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2">Balanced Diet</label>
<div className="flex">
<input type="radio" name="balanceddiet" value={1} onChange={(e) => setBalancedDiet(e.target.value)} />
<label className="ml-2">Yes</label>
<input type="radio" name="balanceddiet" value={0} onChange={(e) => setBalancedDiet(e.target.value)} />
<label className="ml-2">No</label>
</div>
</div>

<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2">BMI</label>
<div className="flex">
<input type="radio" name="obesity" value={0.2} onChange={(e) => setObesity(e.target.value)} />
<label className="ml-2">Below 18</label>
<input type="radio" name="obesity" value={0} onChange={(e) => setObesity(e.target.value)} />
<label className="ml-2">18 to 30</label>
<input type="radio" name="obesity" value={2} onChange={(e) => setObesity(e.target.value)} />
<label className="ml-2">Above 30</label>
</div>
</div>

<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2">Smoker or Passive Smoker</label>
<div className="flex">
<input type="radio" name="passivesmoker" value={1} onChange={(e) => setPassiveSmoker(e.target.value)} />
<label className="ml-2">I never smoke</label>
<input type="radio" name="passivesmoker" value={2} onChange={(e) => setPassiveSmoker(e.target.value)} />
<label className="ml-2">I have smoked more than 100 cigarettes in my lifetime</label>
<input type="radio" name="passivesmoker" value={2} onChange={(e) => setPassiveSmoker(e.target.value)} />
<label className="ml-2">I live with other smokers</label>
</div>
</div>

<div className="text-center mt-6">
<button className="bg-gradient-to-r from-indigo-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg" type="submit">Submit</button>
</div>
</form>
</div>
) : (

<div className="bg-gray-200 min-h-screen p-4">
    <h1>Results & Suggestions</h1>

    <div class="container px-5 py-10 mb-3 rounded-lg bg-white shadow-md">
          <h2 class="text-lg font-medium">Your lifetime risk of lung cancer based on your current lifestyle and conditions is 
          <span style={{color: (risk*100) > 10 ? "red" : (risk*100) >=5 && (risk*100) <=10 ? "orange" : "green"}}> {" "+ (risk * 100).toFixed(1) + "%"}</span>
          </h2>
        </div>

<div className= "bg-white rounded-lg shadow-md p-4">
        {displayedMessages.length > 0 ? (
          <div>
            {displayedMessages.map((message, index) => (
              <div key={index} class="bg-gradient-to-b from-green-300 to-green-400 rounded-lg shadow-lg p-4 my-4">
                <p class="text-green-900 py-4 px-2">
                  <strong>{message}</strong>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div class="bg-gradient-to-b from-green-300 to-green-400 rounded-lg shadow-lg p-4 my-4">
          <p class="text-green-900 py-4 px-2">
            <strong>Please maintain your current healthy lifestyle</strong>
          </p>
        </div>
        )}
      </div>
<button className="bg-blue-400 text-white rounded-full px-4 py-1 mt-3" onClick={() => setPage("survey")}>Go back to survey</button>


</div>
)}


</div>
);
}

export default LungCancer;