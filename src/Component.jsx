import React, { useRef, useState } from "react";
import "./App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const rangeRef = useRef(null);
  const [rangeValue, setRangeValue] = useState(5);

  const handleRangeChange = () => {
    setRangeValue(rangeRef.current.value);
  };

  return (
    <div className="container mt-5">
      <h2>Bootstrap Range</h2>

      <div className="form-group">
        <label htmlFor="customRange">Range Value: {rangeValue}</label>
        <input
          type="range"
          className="form-range"
          id="customRange"
          min="0"
          max="10"
          step="1"
          ref={rangeRef}
          defaultValue={rangeValue}
          onChange={handleRangeChange}
        />
      </div>
    </div>
  );
}

export default App;
