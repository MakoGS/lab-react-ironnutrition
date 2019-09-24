import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
// import TodayFood from "./components/TodayFood";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      newArr: {
        name: "",
        calories: 0,
        qualit: 0
      },
      addState: false
    };
    this.changeName = this.changeName.bind(this);
    this.changeCalories = this.changeCalories.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.addNew = this.addNew.bind(this);
    this.showForm = this.showForm.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }
  showForm() {
    this.setState({
      addState: true
    });
  }
  changeName(event) {
    this.setState({
      newArr: { ...this.state.newArr, name: event.target.value }
    });
  }
  changeCalories(event) {
    this.setState({
      newArr: {
        ...this.state.newArr,
        calories: event.target.value
      }
    });
  }
  changeQuantity(event) {
    this.setState({
      newArr: { ...this.state.newArr, quantity: event.target.value }
    });
  }
  addNew() {
    this.setState({
      foods: [...this.state.foods, this.state.newArr]
    });
  }
  searchBar(event) {
    this.setState({
      foods: [...this.state.foods].filter(food =>
        food.name.includes(event.target.value)
      )
    });
  }

  addToList(n, c, q) {
    let newitem = {
      name: n,
      calories: c,
      quantity: q
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <input
            type="text"
            value={this.state.foods.name}
            onChange={this.searchBar}
          />
        </div>
        {this.state.foods.map((eachFood, index) => (
          <FoodBox foods={eachFood} key={index} addItem={this.addToList} />
        ))}
        {this.state.addState && (
          <div>
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={this.state.foods.name}
                  onChange={this.changeName}
                />
              </div>
              <div>
                <label htmlFor="calories">calories</label>
                <input
                  type="number"
                  value={this.state.foods.calories}
                  onChange={this.changeCalories}
                />
              </div>
              <div>
                <label htmlFor="quantity">quantity</label>
                <input
                  type="text"
                  value={this.state.foods.quantity}
                  onChange={this.changeQuantity}
                />
              </div>
            </form>
            <button onClick={this.addNew}>Add new</button>
          </div>
        )}
        {!this.state.addState && (
          <button onClick={this.showForm}>Add new element</button>
        )}
        {/* <TodayFood /> */}
      </div>
    );
  }
}

export default App;
