import React from "react";

class Test8 extends React.PureComponent {
  state = {
    fullName: "",
    address: "",
    phoneNumber: "",
    enabled: true
  };

  changeState = () => {
    if (this.state.enabled){
      this.setState({
        enabled: false
      });
    }
    else{
      this.setState({
        enabled: true
      });
    }
  }

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
    if (this.state.enabled){
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  nothing = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Task />
        <form onSubmit={this.nothing}>
          <input type="text" placeholder="Name" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
          <input type="text" placeholder="Address" name="address" value={this.state.address} onChange={this.handleChange} />
          <input type="number" placeholder="Number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.changeState}>Enable/Disable</button>      
        </form>
      </div>
    );
  }
}

export default Test8;

const Task = () => (
  <div>
    <h3>
      Ülesanne 8:
    </h3>
    <ol>
      <li>Seda ülesannet saab lahendada ainult siis kui ülesanne 7 on tehtud</li>
      <li>Kopeerige ülesandes 7 tehtud vorm <code>test8.jsx</code> faili.</li>
      <li>Lisage nupp "enable/disable"</li>
      <li>Kui kasutaja vajutab "disable" nupu peale, siis peab vorm muutuma readonly.
        Ehk vormi väljadesse ei ole võimalik sisestada uusi väärtuseid ja
        vormi ei ole võimalik esitada.
      </li>
      <li>
        Kui kasutaja vajutab "enable" nupu peale, siis muutub vorm selliseks, et
        väljadesse on võimalik sisestada väärtuseid ning vormi on võimalik esitada.
      </li>

    </ol>
  </div>
);
