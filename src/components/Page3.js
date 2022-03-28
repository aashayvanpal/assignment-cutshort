import React from 'react'
import Header from './Header'
import '../css/App.css'
import userLogo from '../images/user-logo.png'
import userLogo2 from '../images/user-logo2.png'

const Page3 = () => {
    return (
        <div className='center-container'>
            <Header step={2} />
            <div className='content-center'>
                <h1>How are you planning to you Eden?</h1>
                <h3>We'll streamline your setup experience accordingly</h3>
            </div>

            <div id="checkboxes">
                <input type="radio" name="rGroup" value="1" id="r1" checked="checked" />
                <label class="myselect" for="r1">
                    <img alt="userLogo" src={userLogo} />
                    <br />
                    <br />
                    <h3>For myself</h3>
                    <span>
                        Write better.Think more clearly.Stay organized.
                    </span>
                </label>
                <input type="radio" name="rGroup" value="2" id="r2" />
                <label class="myselect" for="r2">
                    <img alt="userLogo2" src={userLogo2} />
                    <br />
                    <br />
                    <h3>With my team</h3>
                    <span>
                        Wikis,docs,tasks & projects, all in one place.
                    </span>
                </label>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault()
                window.location.pathname = "/page4"
            }}>
                <input type='submit' value="Create Workspace" />
            </form>

        </div>
    )
}

export default Page3