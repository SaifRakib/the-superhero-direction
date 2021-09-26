import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Item.css'

const Item = (props) => {
    // Destructing the value of Item
    const {first_name, last_name, age, email, company, gender, salary, image} = props.item;
    // Icon declare
    const fontIcon = <FontAwesomeIcon icon={faEnvelope} />
    return (
        // return all item contents 
        <div className="itemDisplay">
            <div className="items">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="items-info">
                    <h4>Name : {first_name + " " +last_name}</h4>
                    <p>Email : {email}</p>
                    <p>Age : {age}</p>
                    <p>Gender : {gender}</p>
                    <p>Company Name : {company}</p>
                    <p>Salary : $ {salary}</p>

                </div>
                 {/* Button added here  */}
                <div className="hireMe">
                    <button onClick={() => props.handleButton(props.item)} className="hireMeButton">{fontIcon} Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Item;