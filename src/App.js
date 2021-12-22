// Core
import { h, Fragment, Component } from 'preact';
import {useEffect, useState} from 'preact/hooks';
import Router, { route  }from "preact-router";

// Firebase
import { database } from './firebase'
import { ref, child, get, onValue } from "firebase/database";


// Pages
import About from './pages/about/About.jsx'
import Learn from './pages/learn'
import Roadmap from './pages/roadmap'

// Layout (+ load first page first)
import Header from './layout/Header.jsx'
import Home from './pages/home/Home.jsx'
import Footer from './layout/Footer.jsx'

// Styles
import './App.scss';

// Default to home URL for bad requests, no need for separate file for this component
function Default() {
    console.log(`rerouting to url: /`)
    return route("/")
}

function App() {
    const [roadmaps, setRoadmaps] = useState([])

    useEffect(() => {
        return onValue(ref(database, '/roadmaps/'), (snapshot) => {
            if (snapshot)
            setRoadmaps(snapshot.val())
        }, {
            onlyOnce: true
        });
    }, [])

    return (
        <Fragment>
            <Header />

            <main>
                <Router>
                    <Roadmap path="/roadmap/:slug/:id" />
                    <Home path="/learn" />
                    <About path="/about" />
                    <Learn path="/" roadmaps={roadmaps} />

                    <Default default />
                </Router>
            </main>

            <Footer />
        </Fragment>
    );
}

export default App;
