import React from "react";

class Test9 extends React.PureComponent {
  state = {
    fullName: "",
    address: "",
    phoneNumber: "",
    personalCode: ""
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
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
          <input type="text" placeholder="Name" name="fullName" value={this.state.fullName} onChange={this.handleChange}/>
          <input type="text" placeholder="Aadress" name="address" value={this.state.address} onChange={this.handleChange}/>
          <input type="number" placeholder="Number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}/>
          <input type="number" placeholder="ID" name="personalCode" value={this.state.personalCode} onChange={this.handleChange}/>
          <button>Esita</button>
        </form>
      </div>
    );
  }
}

export default Test9;

const Task = () => (
  <div>
    <h3>
      Ülesanne 9:
    </h3>
    <ol>
      <li>Tuleb luua vorm</li>
      <li>Kasutaja saab sisestada nime, elukoha, telefoni numbri ja isikukoodi</li>
      <li>Kui kasutaja vajutab "esita", siis tehakse päring serveri kasutaja uuendamiseks/loomiseks</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja on olemas, siis peab uuendama kasutajat</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja ei olnud olemas, siis tuleb luua uus kasutaja</li>
      <li>Väga sarnane <code>Task7</code></li>
      <li>Tuleb muuta ainult faile <code>user.router.js</code> ja <code>Test9.jsx</code></li>
      <li>Kasutaja andmebaasi mudeliga saad tutvuda failis <code>user.model.js</code></li>
      <li><a href={LINK}>{LINK}</a></li>
    </ol>
  </div>
);

const LINK = 'https://mongoosejs.com/docs/api.html';
