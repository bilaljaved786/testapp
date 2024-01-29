import { Component } from "react";

class Loginform extends Component {
  constructor() {
    super()

    // define component states
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h2>user Login Form</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>

          <input type="email"
            name="email"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)} /><br /><br />

          <input type="password"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)} /><br /><br />

          <button type="submit">click me</button>
        </form>
      </div>
    )
  }
}

export default Loginform;