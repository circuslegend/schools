import React, { useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../App.css';
import { FaChevronDown } from 'react-icons/fa';

const Bitem = ({text, anim, trues}) => {
    return (
        <div>
            <AnimationOnScroll animateIn={`animate__${anim}`} animateOnce="true">
                <div className='event'>
                    <h2>{text}</h2>
                </div>
                {trues ? <FaChevronDown className="aboba"/> : '' }
            </AnimationOnScroll> 
        </div>
    );
}

export default Bitem;      
        
