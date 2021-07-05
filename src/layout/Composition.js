import { Layout } from './Layout.js';

export const Composition = (layout = Layout, content) => {
    let composition = `
        ${layout.header}
        ${content}
        ${layout.footer}
    `;
    
    return `
        ${composition}
    `;
}