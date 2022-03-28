import React from 'react'
import Header from './Header.js'

const Page1 = () => {
    return (
        <div className='center-container'>
            <Header step={0}/>
            <div className='content-center'>
                <h1>Welcome! First things first ...</h1>
                <h3>You can always change them later.</h3>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault()
                window.location.pathname = "/page2"
            }}>
                <div id="form-division">
                    <label>
                        Full Name
                    </label>
                    <input id="form-input" placeholder='Steve Jobs' />
                    <label>
                        Display Name
                    </label>
                    <input id="form-input" placeholder='Steve' />
                    <br />
                    <input type='submit' value="Create Workspace" />
                </div>
            </form>
        </div>
    )
}

export default Page1