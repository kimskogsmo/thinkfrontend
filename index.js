import { App } from './src/app.js';

const renderApp = (options) => {
    let app = App();
    
    /** App returns HTML string: 
     *  `
     *      <div class="classes">...stuff</div>
     *  ` 
     */

    document.getElementById('root').innerHTML = app; 
}

renderApp();
