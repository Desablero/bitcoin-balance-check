import React, { Component } from "react";

import "./add-address.css";

export default class AddAddress extends Component {
  state = {
    label: "",
    address: "",
  };

  onChangeLabel(event) {
    const input = event.target.value;
    this.setState({ label: input });
  }
  onChangeAddress(event) {
    const input = event.target.value;
    this.setState({ address: input });
  }

  render() {
    const { onAddAddress } = this.props;
    const { address, label } = this.state;

    const onSubmit = (e) => {
      e.preventDefault();
      if (label === "") {
        alert("Print address name");
        return;
      } else if (address === "") {
        alert("Print address");
        return;
      } else if (label.length > 21) {
        alert("Длина имени не должна превышать 21 символ");
        this.setState({ label: "", address: "" });
        return;
      } else {
        onAddAddress(this.state.address, this.state.label);
        this.setState({ label: "", address: "" });
      }
    };

    return (
      <form className="add-address-form" onSubmit={onSubmit}>
        <div className="add-address-form-inputs">
          <button className="add-address-form-inputs">ADD</button>
          <input className="add-address-form-label"
            placeholder="Address label"
            onChange={this.onChangeLabel.bind(this)}
            value={label}
            type="text"
          ></input>
          <input className="add-address-form-address"
            placeholder="Enter the address"
            onChange={this.onChangeAddress.bind(this)}
            value={address}
            type="text"
          ></input>
        </div>
      </form>
    );
  }
}
