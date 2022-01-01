import {h,Fragment} from 'preact'
import { useState, useRef, useEffect } from 'preact/hooks'
import './Profile.styles.scss'

export default function Profile ({
    isAuthenticated,
    roadmaps = [],
    ...props
 }) {
    const [authArea, setAuthArea] = useState('sign-in')

    console.log(props);

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
        <section className={'auth'}>
            {(props.user && !props.user.emailVerified && (
                <section className={'email-verification-notice'}>
                    <span>why u no verify?</span>
                </section>
            ))}

            {!isAuthenticated && (
                authArea === 'sign-in' && (
                    <div className={'sign-in'}>
                        <h1>Sign In</h1>
                        <p>Get back on track.</p>

                        <div className={"card"}>
                            <input ref={email} type={'email'} placeholder={'Your email'}/>
                            <input ref={password} type={'password'} placeholder={'Password'}/>
                            <button onClick={ () => handleSignIn() }>Sign In</button>
                        </div>

                        <h5>Don't have an account yet?</h5>
                        <span className={'secondary-button'} onClick={() => handleSwitchArea() }>
                            Sign up
                        </span>
                    </div>
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

                        <h5>Already have an account?</h5>
                        <span className={'secondary-button'} onClick={() => handleSwitchArea() }>
                            Sign In
                        </span>
                    </Fragment>
                )
            )}

            {isAuthenticated && (
                <Fragment>
                    <header>
                        <h1>Your profile</h1>
                        <p>Track your amazing progress, create and update roadmaps, and challenge your friends from here.</p>
                    </header>

                    <article className={'profile'}>
                        <header>
                            <h3>Your details</h3>
                        </header>

                        <div className={'card'}>
                            <div>
                                <strong>Email:</strong><span>{props.user && (props.user.email)}</span>
                            </div>
                            <div>
                                <strong>Username:</strong><span>{props.user && (props.user.displayName)}</span>
                            </div>
                            <div>
                                <strong>Verified:</strong><span>{props.user.emailVerified === true ? 'Email verified' : 'Email not verified'}</span>
                            </div>
                        </div>
                    </article>

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

                    <strong
                        onClick={props.signOut}
                        style={'cursor: pointer;'
                    }>Sign out</strong>
                </Fragment>
            )}
        </section>
    )
}