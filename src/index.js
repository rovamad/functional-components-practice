import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyInfo() {
    return (
        <div>
            <h1>Marcos Rojas</h1>
            <p>Information Engineer</p>
            <ol>
                <li>Cuyagua</li>
                <li>Río de Janeiro</li>
                <li>Cancun</li>
            </ol>
        </div>)
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));