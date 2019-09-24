import React, { Component } from "react";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.foods.name,
      calories: this.props.foods.calories,
      image: this.props.foods.image,
      quantity: this.props.foods.quantity || 1
    };
  }

  render() {
    return (
      <div>
        <figure>
          <img width="50px" src={this.props.foods.image} />
        </figure>
        <p>
          <strong>{this.props.foods.name}</strong> <br />
          <small>{this.props.foods.calories}</small>
        </p>
        <form>
          <input
            type="number"
            value={this.props.foods.quantity}
            onChange={this.addList}
          />
          <button
            onClick={() => {
              this.props.addToTheList(
                this.state.name,
                this.state.calories,
                this.state.quantity
              );
            }}
          >
            +
          </button>
        </form>
      </div>
    );
  }
}
