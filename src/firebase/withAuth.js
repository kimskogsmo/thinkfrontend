import { h, Component } from 'preact';

import { createContext } from "preact/compat";
import { ifValue } from '../utils/common'

import { auth } from './index'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

/*
import {outputFriendlyConsoleWarning} from "../utils/console-warning";
import Header from "../layout/Header";
import Router from "preact-router";
import {createHashHistory} from "history";
import Home from "../pages/home/Home";
import About from "../pages/about";
import Profile from "../pages/profile";
import Learn from "../pages/learn";
import Roadmap from "../pages/roadmap";

const withAuth = (authState) => (BaseComponent) =>
    class extends Component {
        constructor (props) {
            super(props);

            console.log('withAuth, props: ', props, ' authState: ', authState);
        }

        componentDidMount () {
            console.log('componentDidMount')
/!*            this.setState(authState)*!/

            onAuthStateChanged(
                auth, (user) => {
                    console.log(user, authState)
                }
            )
        }




        getUser() {
            if (this.state.uid) {
                return this.state
            }

            return null
        }

        render(props) {
            return (
                <BaseComponent
                    {...this.state}
                    {...props}
                    signIn={this.signIn}
                    signUp={this.signUp}
                    signOut={this.signOut}
                >{props.children}</BaseComponent>
            )
        }
    }
*/

const initialState = {
    loading: true,
    isAuthenticated: false,
    user: null,
    reloadInfo: null
}

const withAuth = (initialState) => BaseComponent =>
    class extends Component {
        componentDidMount() {
            // This is the most important part of the app. Jk. Jk, no jk.
 /*           outputFriendlyConsoleWarning()*/

            this.setState(initialState)

            onAuthStateChanged(auth, (user) => {
                console.log('onAuthStateChanged', user)

                if (user.uid) {
                    console.log('has id')
                    this.setState({
                        loading: false,
                        isAuthenticated: true,
                        user: {
                            uid: user.uid,
                            reloadInfo: user.reloadUserInfo,
                            displayName: user.displayName,
                        },
                    })
                }
            })
        }


        render(props, {
            loading = true,
            isAuthenticated = false,
            user = null
        }) {
            return loading ? (
                <div>Loading...</div>
            ) : (
                <BaseComponent
                    loading={loading}
                    isAuthenticated={isAuthenticated}
                    user={user}>

                    <Header user={user} isAuthenticated={isAuthenticated} />

                    <main>
                        <section className={'container'}>
                            <Router history={createHashHistory()}>
                                <Home path="/"/>
                                <About path="/about"/>
                                <Profile path="/profile"/>
                                <Learn path="/learn" roadmaps={[]}/>
                                <Roadmap path="/roadmap/:id"/>

                                <Default default/>
                            </Router>
                        </section>
                    </main>

                    <Footer isAuthenticated={isAuthenticated} />
                </BaseComponent>
            );
        }
    };

const AuthfulApp = withAuth(initialState)();

export default AuthfulApp