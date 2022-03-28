import React from 'react'
import { Stepper } from 'react-form-stepper';
import logo from '../images/logo.png'

const Header = ({step}) => {
    return (
        <div >
            <div class='company-header'>
                <img src={logo} alt="logo" />
                <h2>Eden</h2>
            </div>
            <Stepper className='stepper-component'
                steps={[{ label: '' }, { label: '' }, { label: '' }, { label: '' }]}
                activeStep={step}
            />
        </div >
    )
}

export default Header