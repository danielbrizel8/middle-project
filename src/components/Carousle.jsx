import React, { useState, useEffect } from 'react';
import '../styling/carousle.css';

function Carousle(props) {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {children}
          </div>
        </div>
      </div>
      <div className="carousel-wrapper">
        {
          currentIndex > 0 &&
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        }
        <div className="carousel-content-wrapper">
        </div>
        {
          currentIndex < (length - 1) &&
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        }
      </div>
    </div>
  );
}

export default Carousle;