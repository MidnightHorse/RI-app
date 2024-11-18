import React, { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
  // State hooks to handle form inputs
  const [city, setCity] = useState('');
  const [costOfLiving, setCostOfLiving] = useState('');
  const [rent, setRent] = useState('');
  const [relocationDistance, setRelocationDistance] = useState('');
  const [totalCost, setTotalCost] = useState(null);

  // Error message state
  const [error, setError] = useState('');

  // Calculate function
  const handleCalculate = () => {
    if (!city || !costOfLiving || !rent || !relocationDistance) {
      setError('Please fill in all fields.');
      return;
    }

    // You can replace this API call with your actual API URL
    const requestData = {
      city,
      costOfLiving: parseFloat(costOfLiving),
      rent: parseFloat(rent),
      relocationDistance: parseFloat(relocationDistance),
    };

    axios
      .post('http://your-api-url.com/calculate', requestData)
      .then((response) => {
        setTotalCost(response.data.totalCost); // Assuming the API returns the total cost
        setError('');
      })
      .catch((err) => {
        setError('An error occurred. Please try again.');
      });
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
    <section className="relocation-section">
      <div className="heading">
        <h1>Relocation Cost Calculator</h1>
      </div>

      <div className="container">
        <div className="relocation-input">
          <form name="relocationForm">
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
          <div className="buttons">
            <button onClick={handleCalculate} className="calculate-cta">
              Calculate Relocation
            </button>
          </div>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {totalCost !== null && (
          <div className="relocation-output" id="relocation-output">
            <div className="output-container">
              <div className="form-group">
                <label htmlFor="totalCost">Total Relocation Cost</label>
                <div className="result" id="total-cost-output">
                  ${totalCost}
                </div>
              </div>
            </div>
            <div className="buttons">
              <button onClick={handleClear} className="clear-cta">
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calculator;