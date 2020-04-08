import { html, define, dispatch } from 'hybrids';

export function onclick(host) {
  dispatch(host, "button-pressed", { detail: host.details });
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