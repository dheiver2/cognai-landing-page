import React from 'react';
import PropTypes from 'prop-types';
import './Specialties.css';

const Specialties = ({ specialties }) => {
  return (
    <div className="specialties-container">
      <h2 className="specialties-title">Our Specialties</h2>
      <ul className="specialties-list">
        {specialties.map((specialty, index) => (
          <li key={index} className="specialty-item">
            <div className="specialty-icon">{specialty.icon}</div>
            <div className="specialty-details">
              <h3 className="specialty-name">{specialty.name}</h3>
              <p className="specialty-description">{specialty.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Specialties.propTypes = {
  specialties: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Specialties;
