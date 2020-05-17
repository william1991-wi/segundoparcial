import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    edad: "",
    city: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      edad: "",
      city: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      edad: "",
      city: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    });
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="Nombre"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Apellido"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input type= "number"
          name="edad"
          placeholder="Edad"
          value={this.state.edad}
          onChange={e => this.change(e)}
        />        
        <br />
        <input
          name="city"
          placeholder="Cuidad"
          value={this.state.city}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name= "ConfirmPassword"
          type="password"
          placeholder="Confirmación"
          value={this.state.ConfirmPassword}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit1</button>
      </form>
    );
  }
}