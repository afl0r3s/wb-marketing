import React from 'react';
import 'boxicons';

export default function navbar() {
    return (
            <nav>
                <div className="logo">GATIEN SALAUN</div>
                <input type="checkbox" id="check" />
                <label for="check" className="bar-btn">
                    <box-icon name="menu" type="logo" size="md" color="white" /> 
                </label>
                <ul className="nav-menu">
                    <li><a href="!#">home</a></li>
                    <li><a href="!#">about</a></li>
                    <li><a href="!#">featured properties</a></li>
                    <li><a href="!#">portfolio</a></li>
                    <li><a href="!#">search</a></li>
                </ul>
            </nav>
    )
}
