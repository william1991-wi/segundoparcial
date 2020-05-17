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
        <br />
        <br />
        <br />
        <input
          name="firstName"
          placeholder="Nombre"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          required
        />
        <br />
        <br />
        <input
          name="lastName"
          placeholder="Apellido"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          required
        />
        <br />
        <br />
        <input type= "number"
          name="edad"
          min="0"
          max="100"
          placeholder="Edad"
          value={this.state.edad}
          onChange={e => this.change(e)}
          required
        />        
        <br />
        <br />
        <input 
          type= "checkbox"
          id="city1"
          name="Confirmación"
          placeholder="Mayor de edad"
          //value={this.state.city}
          value= "Mayor a 18 años"
          onChange={e => this.change(e)}
          required
        />
        <label for="city1"> Mayor de edad</label><br></br>
        <br />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          required
        />
        <br />
        <br />
        <input
          name="password"
          required pattern="[0-9]*[0-9]" 
          type="password"
          placeholder="Contraseña (0-9)"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name= "ConfirmPassword"
          type="password"
          placeholder="Confirmación"
          value={this.state.ConfirmPassword}
          onChange={e => this.change(e)}
          required
        />
        <br />
        <br />
        <br />
        <button onClick={e => this.onSubmit(e)}>Enviar</button>
      </form>
    );
  }
}