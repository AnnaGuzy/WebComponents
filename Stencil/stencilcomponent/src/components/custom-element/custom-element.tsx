import { Component, ComponentInterface, h, Prop,Event, EventEmitter  } from '@stencil/core';

@Component({
  tag: 'custom-element',
  shadow: true,
})
export class CustomElement implements ComponentInterface {

  @Prop() title: string;
  @Prop() details: string;
  @Event() buttonPressed: EventEmitter;

  handleClick(_e: UIEvent) {
    console.log(this.details);
    this.buttonPressed.emit(this.details);
  }

  render() {
    return (
      <div>
      <p>{this.title}</p>
      <button onClick={this.handleClick.bind(this)}>Details</button>
      </div>
    );
  }

}
