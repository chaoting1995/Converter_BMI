import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UnitConverter = ({ bmi, setBmi }) => (
  <div className="converter">
    <div className="flex-1">
      <div className="converter-title">Set</div>
      <input
        type="number"
        onChange={(e) => setBmi(e.target.value)}
        value={bmi}
        className="input-number"
        min="0"
      />
    </div>
    <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
      <FontAwesomeIcon icon={['fas', 'angle-right']} />
    </span>
    <div className="text-right flex-1">
      <div className="converter-title">Show</div>
      <input
        type="text"
        className="input-number text-right"
        disabled
        value={bmi / 8}
      />
    </div>
  </div>
);

export default UnitConverter;
