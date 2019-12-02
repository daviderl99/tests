import React from "react";
import {TiHeartFullOutline} from "react-icons/ti";

class Test2 extends React.PureComponent{

  state = {
    likes: 0
  };

  handleClick = () => {
    console.log("hello");
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render(){
    return (
      <div>
        <div className={"description"}>
          Ülesanne 2:
          <p>
            Rakendus peab arvet pidama mitu korda on südame ikooni klikitud ning vastava numbri <code>likes:</code> järel kuvama.
          </p>
        </div>
  
        <div style={{display:"flex", alignItems: "center"}}>
          <div>
            Likes: {this.state.likes}
          </div>
          <div onClick={this.handleClick}><TiHeartFullOutline /></div>
          <div>Click me</div>
        </div>
      </div>
    );
  }
}

export default Test2;