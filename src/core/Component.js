class Component {
    template = `
        <div class="component">${this.content}</div>
    `;

    content = 'Asd';

    constructor() {
        this.id = null;
        this.ref = null;
    }

    render() {
        if (this.ref != null && typeof this.ref == HTMLElement) {
            this.ref.innerHTML = this.template;
        }
    }
}