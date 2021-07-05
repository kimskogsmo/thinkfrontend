import { Welcome } from './pages/Welcome.js';
import { Composition } from './layout/Composition.js';

export const App = (children) => {
    let app = `<section id="app">${Composition()}</section>`;

    return app;
}