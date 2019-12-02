import React from "react";

class Test10 extends React.PureComponent {

  constructor(props){
    super(props);
    this.inputFullName = React.createRef();
    this.inputAddress = React.createRef();
    this.inputPhoneNumber = React.createRef();
    this.inputPersonalCode = React.createRef();
  }
  
  handleSubmit = (e) => {
    const formBody = {
      fullName: this.inputFullName.current.value,
      address: this.inputAddress.current.value,
      phoneNumber: this.inputPhoneNumber.current.value,
      personalCode: this.inputPersonalCode.current.value
    };

    e.preventDefault();
    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formBody)
    })
    .then(res => {
      console.log(res);
      return res.text();
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Task />
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" name="fullName" ref={this.inputFullName}/>
          <input type="text" placeholder="Aadress" name="address" ref={this.inputAddress}/>
          <input type="number" placeholder="Number" name="phoneNumber" ref={this.inputPhoneNumber}/>
          <input type="number" placeholder="ID" name="personalCode" ref={this.inputPersonalCode}/>
          <button>Esita</button>
        </form>
      </div>
    );
  }
}

export default Test10;

const Task = () => (
  <div>
    <h3>
      Ülesanne 10:
    </h3>
    <ol>
      <li>Tuleb teha sama vorm nagu <code>Ülesanne 9</code>, aga siin tuleb kasutada "uncontrolled" form </li>
      <li>Meeldetuletuse link <a href={LINK}>{LINK}</a> (sest te olete Reacti ametliku lehe juba ammu läbi lugenud)</li>
      <li>Tuleb muuta ainult faili <code>Test10.jsx</code></li>
    </ol>
  </div>
);

const LINK = 'https://reactjs.org/docs/uncontrolled-components.html';
