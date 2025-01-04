import React from 'react';
import PropTypes from 'prop-types';
import './Preview.css';

const Preview = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="preview-card" onClick={onClick}>
      <img src={imageUrl} alt={title} className="preview-image" />
      <div className="preview-content">
        <h3 className="preview-title">{title}</h3>
        <p className="preview-description">{description}</p>
      </div>
    </div>
  );
};

Preview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Preview.defaultProps = {
  description: '',
  onClick: () => {},
};

export default Preview;
