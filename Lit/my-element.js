import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
    
static get properties() {
    return { 
        title: { type: String },
        details: { type: String }
    };
}
constructor(){
    super();
    this.title = 'title';
    this.details = 'details';
}
  handleClick(e) {
    console.log(this.details);
    let event = new CustomEvent('button-pressed', {
        detail: this.details
      });
      this.dispatchEvent(event);
  }

  render(){
    return html`
    <p>${this.title}</p>
    <button @click="${this.handleClick}">Details</button>
    `;
  }
}
customElements.define('my-element', MyElement);