import {h,Fragment} from 'preact'
import { useState, useRef, useEffect } from 'preact/hooks'
import './Profile.styles.scss'

export default function Profile ({
    isAuthenticated,
    roadmaps = [],
    ...props
 }) {
    const [authArea, setAuthArea] = useState('sign-in')

    const email = useRef(null)
    const password = useRef(null)

    const signUpEmail = useRef(null)
    const signUpPassword = useRef(null)
    const signUpUsername = useRef(null)

    const handleSignIn = () => {
        if (email
            && password
            && email.current.value
            && password.current.value) {
            if (typeof props.signIn === 'function')
                props.signIn(email.current.value, password.current.value);
        }
    }

    const handleSignUp = () => {
        if (signUpEmail
            && signUpEmail.current.value
            && signUpPassword
            && signUpPassword.current.value) {

            if (typeof props.signUp === 'function')
                props.signUp(
                    signUpEmail.current.value,
                    signUpPassword.current.value,
                    signUpUsername.current.value);
        }
    }

    const handleSwitchArea = () => {
        if (authArea === 'sign-up') {
            return setAuthArea('sign-in')
        }

        return setAuthArea('sign-up')
    }

    return (
        <Fragment>
            {!isAuthenticated && (
                authArea === 'sign-in' && (
                    <Fragment>
                        <h1>Sign In</h1>
                        <p>Kom in i värmen.</p>

                        <div className={"card"}>
                            <input ref={email} type={'email'} placeholder={'Your email'}/>
                            <input ref={password} type={'password'} placeholder={'Password'}/>
                            <button onClick={ () => handleSignIn() }>Sign In</button>
                        </div>

                        <strong style={'margin-top: 2rem'} onClick={() => handleSwitchArea() }>
                            Sign up instead?
                        </strong>
                    </Fragment>
                )
            )}

            {!isAuthenticated && (
                authArea === 'sign-up' && (
                    <Fragment>
                        <h1>Sign Up </h1>
                        <p>Create an account to track your progress, to create new roadmaps, and more.</p>
                        <div className={"card"}>
                            <input ref={signUpEmail} type={'email'} name={'email'} placeholder={'Your email'}/>
                            <input ref={signUpUsername} type={'text'} name={'username'} placeholder={'Desired username'}/>
                            <input ref={signUpPassword} type={'password'} name={'password'} placeholder={'Password'}/>
                            <button onClick={ () => handleSignUp() }>Sign me up!</button>
                        </div>

                        <strong style={'margin-top: 2rem'} onClick={() => handleSwitchArea() }>
                            Already have an account?
                        </strong>
                    </Fragment>
                )
            )}

            {isAuthenticated && (
                <Fragment>
                    <header>
                        <h1>Your profile</h1>
                        <p>Track your amazing progress, create and update roadmaps, and challenge your friends from here.</p>
                    </header>

                    <article>
                        <h2>Stats</h2>
                        <div className={'stats'}>
                            <p>If you had any stats, you would get stats!</p>
                        </div>
                    </article>

                    <article>
                        <h2>Your roadmaps</h2>
                        <p>No roadmaps yet... bah!</p>
                        <a href={"/create-roadmap"}>
                            <button>Create one?</button>
                        </a>
                    </article>

                    <article>
                        <h2>Challenges</h2>
                        <p>You haven't submitted or received any challenges yet...</p>
                        <a href={"/challenge-friend"}>
                            <button>Challenge someone now!</button>
                        </a>
                    </article>

                    <article>
                        <h3>Your details</h3>
                        <p>Coming soon</p>
                    </article>

                    <strong
                        onClick={props.signOut}
                        style={'cursor: pointer;'
                    }>Sign out</strong>
                </Fragment>
            )}
        </Fragment>
    )
}