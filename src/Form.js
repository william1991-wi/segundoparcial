import React from 'react';


export default class Form extends React.Component {
  state = {
    nombre: '',
    apellido: '',
    edad: '',
    box: '',
    email: '',
    password: '',
    ConfirmPassword: '',
  };
// eslint-disable-next-line no-useless-constructor
  constructor (props){
    super(props);
    this.state = {
      currentItem: {
        text: "",
      },
    };
  }
  handleInput = (event) => {
    this.setState ({
        currentItem: {
         text: event.targert.value,
        },
    });  
  };
  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      Nombre: '',
      Apellido: '',
      Edad: '',
      Box: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
    });
    this.props.onChange({
      Nombre: '',
      Apellido: '',
      Edad: '',
      Box: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
    });
  };

  render() {
    return (
      <form>
        <br />
        <h1>REGISTRO DE INGRESO</h1>
        <input
          type="image"
          src="https://radcolombia.org/web/sites/default/files/archivos/instituciones/fundacion-universitaria-libertadores/logo-full.png"
          alt=""
          width="300"
          height="150"
        />
        <br />
        <br />
        <input
          name="nombre"
          placeholder=" Nombre"
          value={this.state.nombre}
          onChange={(e) => this.change(e)}
          //value={this.state.currentItem.text}
          //onChange={this.handleInput}
          required
        />
        <br />
        <br />
        <input
          name="apellido"
          placeholder=" Apellido"
          value={this.state.apellido}
          onChange={(e) => this.change(e)}
          //value={this.state.currentItem.text}
          //onChange={this.handleInput}
          required
        />
        <br />
        <br />
        <input
          type="number"
          name="edad"
          min="0"
          max="100"
          placeholder=" Edad"
          value={this.state.edad}
          onChange={(e) => this.change(e)}
          //value={this.state.currentItem.text}
          //onChange={this.handleInput}
          required
        />
        <br />
        <br />
        <input
          type="checkbox"
          id="box"
          name=" Confirmación"
          placeholder="Mayor de edad"
          //value={this.state.box}
          value="Mayor a 18 años"
          onChange={(e) => this.change(e)}
          //value={this.state.currentItem.text}
          //onChange={this.handleInput}
          required
        />
        <label for="box"> Mayor de edad</label>
        <br></br>
        <br />
        <input
          name="email"
          type="email"
          placeholder=" Email"
          value={this.state.email}
          onChange={(e) => this.change(e)}
          //value={this.state.currentItem.text}
          //onChange={this.handleInput}
          required
        />
        <br />
        <br />
        <input
          name="password"
          pattern="[0-9]*"
          type="password"
          inputMode="numeric"
          placeholder=" Contraseña (0-9)"
          value={this.state.password}
          onChange={(e) => this.change(e)}
          //value={this.state.currentItem.text}
          //onChange={this.handleInput}
          required
        />
        <br />
        <br />
        <input
          name="ConfirmPassword"
          type="password"
          placeholder=" Repetir Contraseña"
          value={this.state.ConfirmPassword}
          onChange={(e) => this.change(e)}
          //value={this.state.currentItem.text}
          //onChange={this.handleInput}
          required
        />
        <br />
        <br />
        <button class="button3">ENVIAR</button>

        

      </form>
      
    );
  }
  
}
