import React from "react";

export class MainComponent extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      a: "Привет",
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log("getDerivedStateFromProps", props, state);
  //   }

  componentWillMount() {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate",
      nextProps,
      this.props,
      nextState,
      this.state
    );
    return true;
  }

  render() {
    return (
      <div>
        {this.props.showMe && (
          <div>
            <h1>Привет Мир</h1>
            <p>Миру - мир, пиру - пир!</p>{" "}
          </div>
        )}
        <strong>{this.props.counter}</strong>
      </div>
    );
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return "Hello, World!";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
  }
}

MainComponent.defaultProps = {
  b: "Пока",
};
