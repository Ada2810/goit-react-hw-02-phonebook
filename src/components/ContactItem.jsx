import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px' }}>
        {name}: {number}
      </span>
      <button
        onClick={() => onDeleteContact(id)}
        style={{
          padding: '5px 10px',
          fontSize: '14px',
          backgroundColor: '#FF6B6B',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
