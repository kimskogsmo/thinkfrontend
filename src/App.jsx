// Core
import {h,Fragment,Component} from 'preact'; /** @jsx h */
import Router,{route} from "preact-router";

// Firebase / utils
import {database,auth} from './firebase'
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signInAnonymously,
    signOut,
    getAdditionalUserInfo
} from "firebase/auth";
import {createHashHistory} from "history";

// Pages
import About from './pages/about'
import Learn from './pages/learn'
import Profile from './pages/profile'
import Roadmap from './pages/roadmap'

// Layout (+ load first page first)
import Header from './layout/Header.jsx'
import Home from './pages/home/Home.jsx'

// Styles
import './App.styles.scss';
import {ifValue} from "./utils/common";

import {outputFriendlyConsoleWarning} from './utils/console-warning';

// This is the most important part of the app. Jk. Jk, no jk.
outputFriendlyConsoleWarning()

const initialState = {
    isAuthenticated: false,
    user: null,
    reloadInfo: null
}

const withAuth = (initialState) => BaseComponent =>
    class extends Component {
        componentDidMount() {
            // Default to not signed in state
            this.setState(initialState)

            // Bind to the withAuth this context
            this.signIn = (function(email, password) {
                signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                ).then(data => {
                    if (data.user.uid) {
                        this.setState({
                            isAuthenticated: true,
                            user: data.user.reloadUserInfo
                        });
                    } else {
                        this.setState(initialState);
                    }
                })

            }).bind(this);

            // Bind ...
            this.signUp = (function (email, password, displayName) {
                createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                ).then(data => {
                    ifValue (data.user.uid, () => {
                        updateProfile(data.user, {
                            displayName: displayName
                        }).then(() => {
                            this.setState({
                                isAuthenticated: true,
                                user: data.user,
                            })
                        })
                    });

                    localStorage.setItem('user', data.user.reloadUserInfo);
                })
            }).bind(this);

            // Bind ...
            this.signOut = (function() {
                signOut(auth).then((res) => {
                    this.setState(initialState);
                })
            }).bind(this);

            // On auth change, set state
            onAuthStateChanged(auth, (user) => {
                if (user && user.uid) {
                    this.setState({
                        isAuthenticated: true,
                        user: user.reloadUserInfo
                    })
                }
            })
        }

        render(props, {
            isAuthenticated = false,
            user = null,
            signUp,
            signOut,
            signIn
        }) {
            return (
                <BaseComponent
                    isAuthenticated={isAuthenticated}
                    user={user}
                    signOut={this.signOut}
                    signUp={this.signUp}
                    signIn={this.signIn}
                >
                    {props.children}
                </BaseComponent>
            );
        }
    };

const AppWithAuth = withAuth(initialState)(App);

function App({ user, isAuthenticated, signIn, signUp, signOut}) {
    return (
        <div className={'master'}>
            <Header user={user} isAuthenticated={isAuthenticated} />

            <main>
                <section className={'container'}>
                    <Router history={createHashHistory()}>
                        <Home path="/"/>
                        <About path="/about"/>

                        <Profile
                            path="/profile"
                            isAuthenticated={isAuthenticated}
                            user={user}
                            signIn={signIn}
                            signUp={signUp}
                            signOut={signOut}
                        />

                        <Learn path="/learn" roadmaps={[]}/>
                        <Roadmap path="/roadmap/:slug"/>

                        <Default default/>
                    </Router>
                </section>
            </main>

            <Footer isAuthenticated={isAuthenticated} />
        </div>
    )
}

// Default to home URL for bad requests, no need for separate file for this component
function Default () {
    console.warn(`Bad request URL, rerouting to home: '/'`)

    return route("/")
}

function Footer ({ isAuthenticated }) {
    return (
        <footer>
            <p>This is a WIP. Contact me <a href={"mailto:kim.skogsmo@gmail.com"}>@email</a></p>
            <p>&copy; 2021 thinkfrontend</p>
        </footer>
    )
}

export default AppWithAuth;
