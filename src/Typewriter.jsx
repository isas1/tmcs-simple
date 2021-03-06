import React from "react";

class Typewriter extends React.Component {
  state = {
    itemToDisplay: "Teach Me Computer Science",
    iterator: 0
  };
  componentDidMount() {
    this.typeWriter();
  }

  componentDidUpdate() {
    if (this.state.iterator === 0) {
      clearInterval(this.typer);
      setTimeout(this.typeWriter, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.typer);
  }

  typeDelete = () => {
    this.typer = setInterval(() => {
      this.setState(prevState => {
        return {
          iterator: prevState.iterator - 1
        };
      });
    }, 200);
  };

  typeWriter = () => {
    //this.getNewItem();
    this.typer = setInterval(() => {
      this.setState(prevState => {
        return {
          iterator: prevState.iterator + 1
        };
      });
    }, 200);
  };

  getNewItem = () => {
    if (this.state.iterator === 0) {
      this.setState({
        itemToDisplay: this.props.typeOptions[
          Math.floor(Math.random() * this.props.typeOptions.length)
        ]
      });
    }
  };
  render() {
    const style = {
      fontWeight: "900",
      fontSize: "36px"
    };
    return (
      <div style={style}>
        <div>{this.state.itemToDisplay.substring(0, this.state.iterator)}</div>
      </div>
    );
  }
}

export default Typewriter;