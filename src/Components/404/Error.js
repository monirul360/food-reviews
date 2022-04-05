import React from 'react';
import './Error.css'
const Error = () => {
    return (
        <div>
            <div className="error-container">
                <div>
                    <h1>404</h1>
                    <h2>Not Found</h2>
                    <p>The resource requested could not be found on this server!</p>
                </div>
            </div>
        </div>
    );
};

export default Error;