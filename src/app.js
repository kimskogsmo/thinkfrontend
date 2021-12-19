import { h, Component } from 'preact';
import logo from './logo.svg';
import './App.scss';

import Footer from './layout/Footer.jsx'

function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
        </div>
    );
}

export default App;
