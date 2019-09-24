import React, { Component } from "react";

export default class FoodBox extends Component {
  render() {
    return (
      <div>
        {this.props.foods.map(eachFood => (
          <div>
            <figure>
              <img width="50px" src={eachFood.image} />
            </figure>
            <p>
              <strong>{eachFood.name}</strong> <br />
              <small>{eachFood.calories}</small>
            </p>
            <input type="number" value={eachFood.quantity} />
            <button>+</button>
          </div>
        ))}
      </div>
    );
  }
}
