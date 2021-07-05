import { App } from './src/app.js';

const renderApp = (options) => {
    let app = App();

    console.log(App())
    
    document.getElementById('root').innerHTML = app; 
}

renderApp();
