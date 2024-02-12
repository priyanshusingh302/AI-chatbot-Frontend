import React from 'react';
import '../styles.css';

const CustomInput = ({ setContext }) => {
    return (
        <div className="input-wrapper">
            <textarea
                type="text"
                onChange={(newContext) => (setContext(newContext.target.value))}
                className="custom-input"
                placeholder="Context"
            />
        </div>
    );
}

export default CustomInput;
