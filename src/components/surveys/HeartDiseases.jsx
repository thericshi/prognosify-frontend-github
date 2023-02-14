import React, { useState } from 'react';
import Modal from 'react-modal';

import bg_land from '../../assets/land-bg1.png';

function HeartDiseases() {

  const [BMI, setBmi] = useState("");
  const [Smoker, setSmoker] = useState("");
  const [Diabetes, setDiabetes] = useState("");
  const [PhysActivity, setPhysicalActivity] = useState("");
  const [Fruits, setFruits] = useState("");
  const [Veggies, setVeggies] = useState("");
  const [HvyAlcoholConsump, setAlcoholConsumption] = useState("");
  const [GenHlth, setGeneralHealth] = useState("");
  const [MentHlth, setMentalHealth] = useState("");
  const [PhysHlth, setPhysicalHealth] = useState("");
  const [DiffWalk, setDifficultyWalking] = useState("");
  const [Sex, setBiologicalSex] = useState("");
  
  const [page, setPage] = useState("survey");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [risk, setRisk] = useState("--");

  const messages = [
    {
    condition: BMI >= 30,
    message: "A BMI greater than 30 is associated with an increased risk of cardiovascular disease. Maintaining a healthy weight through a balanced diet and regular physical activity can help reduce this risk."
    },
    {
    condition: Smoker === "1",
    message: "Smoking is a major risk factor for cardiovascular disease. Quitting smoking can greatly reduce your risk of heart disease and improve your overall health."
    },
    {
    condition: Diabetes === "1",
    message: "Diabetes is a risk factor for cardiovascular disease. Maintaining tight control of blood sugar levels through a healthy diet, regular physical activity, and medication if prescribed by a healthcare professional can help manage this risk."
    },
    {
    condition: PhysActivity === "0" || PhysActivity === "0.25",
    message: "Physical inactivity is associated with an increased risk of cardiovascular disease. Incorporating at least 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity aerobic activity, or a combination of both, per week for adults can help reduce this risk."
    },
    {
    condition: Fruits === "0" || Fruits === "0.5",
    message: "Low fruit consumption is associated with an increased risk of cardiovascular disease. Incorporating at least 4.5 cups of fruits and vegetables per day as part of a healthy diet can help reduce this risk."
    },
    {
    condition: Veggies === "0" || Veggies === "0.5",
    message: "Low vegetable consumption is associated with an increased risk of cardiovascular disease. Incorporating at least 4.5 cups of fruits and vegetables per day as part of a healthy diet can help reduce this risk."
    },
    {
    condition: HvyAlcoholConsump === "-1",
    message: "Heavy alcohol consumption is associated with an increased risk of cardiovascular disease. Limiting alcohol consumption to no more than two drinks per day for men and one drink per day for women can help reduce this risk."
    }
    ];

    const [displayedMessages, setDisplayedMessages] = useState([]);

    //  const sigmoid = x => (0.61) / (1 + 0.5 * Math.exp(4-x)) + 0.03;
  const sigmoid = x => (0.94) / (1 + 0.5 * Math.exp(4-0.5*x)) + 0.06;

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      BMI, Smoker, Diabetes, PhysActivity, Fruits, Veggies,
      HvyAlcoholConsump, GenHlth, MentHlth, PhysHlth, DiffWalk, Sex
    }
    // console.log(data);

      // Check if any of the fields are empty
      for (const value of Object.values(data)) {
        if (value === "") {
          setModalIsOpen(true);
          return;          
        }
      }

    let messagesToDisplay = []
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].condition) {
        messagesToDisplay.push(messages[i].message);
      }
    }
    setDisplayedMessages(messagesToDisplay);


    // window.location.href = '/suggestionsHD';

    setPage("suggestions");

    // const coefficients = [0.03, 0.50871063, 0.37189953, -0.05831967, -0.01, -0.015, -0.30083456, 0.615705, -0.00955058, 0.00505893, 0.62290519, 0.68563246];
    const coefficients = [0.075, 1.5, 0.9, -0.3831967, -0.3, -0.05, -0.30083456, 0.615705, -0.00955058, 0.00505893, 0.62290519, 0.68563246];
    
    // Convert the data to a numerical array
    let numericalData = [];
    for (const value of Object.values(data)) {
    numericalData.push(parseFloat(value));
    }

    // Calculate the prediction using the linear regression model
    let prediction = 0;
    for (let i = 0; i < coefficients.length; i++) {
    prediction += coefficients[i] * numericalData[i];
    }

    prediction = sigmoid(prediction);
    setRisk(prediction);
    
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
      <h1>Heart Disease Survey</h1>
      <form className="bg-white p-4 rounded-lg shadow-lg bg-opacity-80" onSubmit={handleSubmit}>
    <label>BMI:
    <input type="number" value={BMI} onChange={e => setBmi(e.target.value)} />
    </label>
    <br />
    <label>Smoker:
    <div>
    <input type="radio" name="smoker" value={1} onChange={e => setSmoker(e.target.value)} />Yes
    <input type="radio" name="smoker" value={0} onChange={e => setSmoker(e.target.value)} />No
    </div>
    </label>
    <br />
    <label>Diabetes:
    <div>
    <input type="radio" name="diabetes" value={1} onChange={e => setDiabetes(e.target.value)} />Yes
    <input type="radio" name="diabetes" value={0} onChange={e => setDiabetes(e.target.value)} />No
    </div>
    </label>
    <br />
    <label>Physical Activity:
    <div>
    <input type="radio" name="physicalActivity" value={0} onChange={e => setPhysicalActivity(e.target.value)} />Never
    <input type="radio" name="physicalActivity" value={0.25}onChange={e => setPhysicalActivity(e.target.value)} />Rarely
    <input type="radio" name="physicalActivity" value={0.5} onChange={e => setPhysicalActivity(e.target.value)} />Sometimes
    <input type="radio" name="physicalActivity" value={0.75} onChange={e => setPhysicalActivity(e.target.value)} />Often
    <input type="radio" name="physicalActivity" value={1} onChange={e => setPhysicalActivity(e.target.value)} />Very Often
    </div>
    </label>
    <br />
    <label>Fruits:
    <input type="radio" name="fruits" value={0} onChange={e => setFruits(e.target.value)} />Less than 1/2 cup per day
    <input type="radio" name="fruits" value={0.5} onChange={e => setFruits(e.target.value)} />1/2 to 1 cup per day
    <input type="radio" name="fruits" value={1} onChange={e => setFruits(e.target.value)} />More than 1 cup per day
    </label>
    <br />
    <label>Veggies:
    <div>
    <input type="radio" name="veggies" value={0} onChange={e => setVeggies(e.target.value)} />Less than 1 cup per day
    <input type="radio" name="veggies" value={0.5} onChange={e => setVeggies(e.target.value)} />1 to 2 cups per day
    <input type="radio" name="veggies" value={1} onChange={e => setVeggies(e.target.value)} />More than 2 cups per day
    </div>
    </label>
    <br />
    <label>Alcohol Consumption:
    <div>
    <input type="radio" name="alcoholConsumption" value={0} onChange={e => setAlcoholConsumption(e.target.value)} />Never
    <input type="radio" name="alcoholConsumption" value={1} onChange={e => setAlcoholConsumption(e.target.value)} />Less than 15 drinks per week
    <input type="radio" name="alcoholConsumption" value={-1} onChange={e => setAlcoholConsumption(e.target.value)} />More than 15 drinks per week
    </div>
    </label>
    <br />
    <label>General Health:
    <div>
    <input type="radio" name="generalHealth" value={5} onChange={e => setGeneralHealth(e.target.value)} />Poor
    <input type="radio" name="generalHealth" value={4} onChange={e => setGeneralHealth(e.target.value)} />Fair
    <input type="radio" name="generalHealth" value={3} onChange={e => setGeneralHealth(e.target.value)} />Good
    <input type="radio" name="generalHealth" value={2} onChange={e => setGeneralHealth(e.target.value)} />Very Good
    <input type="radio" name="generalHealth" value={1} onChange={e => setGeneralHealth(e.target.value)} />Excellent
    </div>
    </label>
    <br />
    <label>Mental Health:
    <div>
    <input type="radio" name="mentalHealth" value={0} onChange={e => setMentalHealth(e.target.value)} />Poor
    <input type="radio" name="mentalHealth" value={2} onChange={e => setMentalHealth(e.target.value)} />Fair
    <input type="radio" name="mentalHealth" value={5} onChange={e => setMentalHealth(e.target.value)} />Good
    <input type="radio" name="mentalHealth" value={10} onChange={e => setMentalHealth(e.target.value)} />Very Good
    <input type="radio" name="mentalHealth" value={30} onChange={e => setMentalHealth(e.target.value)} />Excellent
    </div>
    </label>
    <br />
        <label>Physical Health:<div>
            <input type="radio" name="physicalHealth" value={30} onChange={e => setPhysicalHealth(e.target.value)} />Poor
            <input type="radio" name="physicalHealth" value={10} onChange={e => setPhysicalHealth(e.target.value)} />Fair
            <input type="radio" name="physicalHealth" value={5} onChange={e => setPhysicalHealth(e.target.value)} />Good
            <input type="radio" name="physicalHealth" value={2} onChange={e => setPhysicalHealth(e.target.value)} />Very Good
            <input type="radio" name="physicalHealth" value={0} onChange={e => setPhysicalHealth(e.target.value)} />Excellent
          </div>
        </label>
        <br />
        <label>Difficulty Walking: 
          <div>
            <input type="radio" name="difficultyWalking" value={1} onChange={e => setDifficultyWalking(e.target.value)} />Yes
            <input type="radio" name="difficultyWalking" value={0} onChange={e => setDifficultyWalking(e.target.value)} />No
          </div>
        </label>
        <br />
        <label>Biological Sex: 
          <div>
            <input type="radio" name="biologicalSex" value={1} onChange={e => setBiologicalSex(e.target.value)} />Male
            <input type="radio" name="biologicalSex" value={0} onChange={e => setBiologicalSex(e.target.value)} />Female
          </div>
        </label>
        <br />
        <button className="bg-gradient-to-r from-indigo-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg" type="submit">Submit</button>
      </form>
    </div>
    ) : (
      <div className="bg-gray-200 min-h-screen p-4">
        <h1>Results & Suggestions</h1>

        <div class="container px-5 py-10 mb-3 rounded-lg bg-white shadow-md">
          <h2 class="text-lg font-medium">Your lifetime risk of heart diseases based on your current lifestyle and conditions is 
          <span style={{color: (risk*100) > 50 ? "red" : (risk*100) >=25 && (risk*100) <=50 ? "orange" : "green"}}> {" "+ (risk * 100).toFixed(1) + "%"}</span>
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
};

export default HeartDiseases;

