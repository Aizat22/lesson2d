import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ScrollBar = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    if (value < 90) {
      setValue(value + 10);
    } else {
      setValue(100);
    }
  };

  const decreaseValue = () => {
    if (value > 10) {
      setValue(value - 10);
    } else {
      setValue(0);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 100) {
      setValue(inputValue);
    }
  };

  return (
    <div>
      <ProgressBar now={value} label={`${value}%`} />
      <div className="d-flex justify-content-between">
        <Button variant="primary" onClick={decreaseValue}>-10%</Button>
        <Form.Group controlId="scrollValue">
          <Form.Control
            type="number"
            value={value}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={increaseValue}>+10%</Button>
      </div>
    </div>
  );
};

export default ScrollBar;
