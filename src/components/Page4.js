import React from 'react'
import Header from './Header'
import tick from '../images/tick.png'
import { Link } from 'react-router-dom'

const Page4 = () => {
    return (
        <div className='center-container'>
            <Header step={3} />

            <br />
            <br />
            <br />

            <img id="tick" alt="tick" src={tick} />
            <div className='content-center'>
                <h1>Congratulations, Eren!</h1>
                <br />
                <h3>You have completed onboarding,you can start using the Eden!</h3>
            </div>

            <form>
                <div id="form-division">
                    <Link to="/">
                        <input type='submit' value="Launch Eden" />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Page4