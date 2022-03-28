import React from 'react'
import Header from './Header'
import tick from '../images/tick.png'
const Page4 = () => {
    return (
        <div className='center-container'>
            <Header step={3} />

            <br/>
            <br/>
            <br/>

            <img id="tick" alt="tick" src={tick}/>
            <div className='content-center'>
                <h1>Congratulations, Eren!</h1>
                <br/>
                <h3>You have completed onboarding,you can start using the Eden!</h3>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault()
                window.location.pathname = "/"
            }}>
                    <input type='submit' value="Launch Eden" />
            </form>
        </div>
    )
}

export default Page4