  // import './App.css';
  import { useState } from 'react'
  import { HashRouter, Route, Routes } from 'react-router-dom';
  import NavBar from './components/NavBar';
  import Dashboard from './components/Dashboard';
  import Profile from './components/Profile';
  import Prediction from './components/Prediction';
  import HeartDiseases from './components/surveys/HeartDiseases';
  import BreastCancer from './components/surveys/BreastCancer';
  import LungCancer from './components/surveys/LungCancer';
  import Login from './components/Login';
  import Footer from './components/Footer'

  function App() {

    const [stdWeight, setStdWeight] = useState('');
    const [stdHeight, setStdHeight] = useState('');

    function handleDataSubmit({cWeight, cHeight}) {
      setStdWeight(cWeight);
      setStdHeight(cHeight);
    }

    return (
      <div className="App bg-gray-200">
        <NavBar />
        <HashRouter>
          <Routes>
              <Route exact path="/prediction" element={<Prediction />} />
              <Route exact path="/profile" element={<Profile handleDataSubmit={handleDataSubmit}/>} />
              <Route exact path="/heart-diseases" element={<HeartDiseases stdWeight={stdWeight} stdHeight={stdHeight}/>} />
              <Route exact path="/breast-cancer" element={<BreastCancer />} />
              <Route exact path="/lung-cancer" element={<LungCancer />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </HashRouter>
        <Footer/ >
      </div>
    );
  }

  export default App;
