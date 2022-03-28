import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Page2 = () => {
    return (
        <div className='center-container'>
            <Header step={1} />
            <div className='content-center'>
                <h1>Let's set up a home for all your work</h1>
                <h3>you can always create another workspace later</h3>
            </div>

            <form >
                <div id="form-division">
                    <label>
                        Workspace Name
                    </label>
                    <input id="form-input" placeholder='Eden' />
                    <label>
                        Workspace URL <span>(optional)</span>
                    </label>

                    <label id="domain-before" data-domain="www.eden.com/">
                        <input id="form-input" placeholder='Example' style={{ margin: '0px' }} />
                    </label>

                    <br />
                    <Link to="/page3">
                        <input type='submit' value="Create Workspace" />
                    </Link>

                </div>
            </form>
        </div>
    )
}

export default Page2