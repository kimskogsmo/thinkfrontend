import { h, Fragment, Component } from 'preact';
import Router, { route }from "preact-router";

import logo from './logo.svg';
import './App.scss';

import Header from './layout/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Footer from './layout/Footer.jsx'
import Learn from './pages/learn'

function Default() {
    return route("/")
}

function App() {
    return (
        <Fragment>
            <Header />

            <main>
                <Router>
                    <Home path="/learn" />
                    <About path="/about" />
                    <Learn path="/" />

                    <Default default />
                </Router>
            </main>

            <Footer />
        </Fragment>
    );
}

export default App;
