import { html, define } from 'hybrids';

export function onclick(host) {
  alert(host.details);
}

export const SimpleElement = {
  title: "",
  details: "",
  buttonClicked: false,
  render: ({ title, details }) => html`
  <div>
    <h1>${title}</h1>
    <button onclick="${onclick}" >
      Details
    </button>
  </div>
  `,
};

define('simple-element', SimpleElement);