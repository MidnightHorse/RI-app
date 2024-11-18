import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/main.css';
import './css/modal.css';

const App = () => {
  const [city, setCity] = useState('');
  const [costOfLiving, setCostOfLiving] = useState('');
  const [rent, setRent] = useState('');
  const [relocationDistance, setRelocationDistance] = useState('');
  const [totalCost, setTotalCost] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    if (!costOfLiving || !rent || !relocationDistance) {
      setError('Please fill in all required fields.');
      return;
    }

    // Example calculation (you can replace this with your logic)
    const cost = (parseFloat(costOfLiving) + parseFloat(rent)) * parseFloat(relocationDistance) * 0.1;
    setTotalCost(cost.toFixed(2));
    setError('');
  };

  const handleClear = () => {
    setCity('');
    setCostOfLiving('');
    setRent('');
    setRelocationDistance('');
    setTotalCost(null);
    setError('');
  };

  return (
    <section class="hero">
      <div className="heading">
        <h1>Relocation Cost Calculator</h1>
      </div>

      <div className="container">
        <div className="hero-input">
          <ul className="input-list">
            <form action="" name="inputForm">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  placeholder="Enter city name"
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="costOfLiving">Cost of Living Index</label>
                <input
                  type="number"
                  placeholder="Cost of Living Index"
                  id="costOfLiving"
                  min="0"
                  value={costOfLiving}
                  onChange={(e) => setCostOfLiving(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="rent">Monthly Rent</label>
                <input
                  type="number"
                  placeholder="Rent (USD)"
                  id="rent"
                  min="0"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="relocationDistance">Relocation Distance</label>
                <input
                  type="number"
                  placeholder="Distance (miles)"
                  id="relocationDistance"
                  min="0"
                  value={relocationDistance}
                  onChange={(e) => setRelocationDistance(e.target.value)}
                />
              </div>
            </form>
          </ul>

          <div className="buttons">
            <input
              className="calculate-cta"
              type="button"
              id="calculate-relocation-btn"
              value="Calculate Relocation"
              onClick={handleCalculate}
            />
          </div>
        </div>

        {totalCost && (
          <div className="relocation-output" id="relocation-output">
            <span className="close-output" onClick={() => setTotalCost(null)}>&times;</span>
            <div className="output-container">
              <div className="form-group">
                <label htmlFor="totalCost">Total Relocation Cost</label>
                <div className="result" id="total-cost-output">
                  ${totalCost}
                </div>
              </div>
            </div>
            <div className="buttons">
              <input
                className="clear-cta"
                type="button"
                id="clear-relocation-btn"
                value="Clear"
                onClick={handleClear}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default App;
