import React, { Component } from "react";
import { connect } from "react-redux";
import counter, { onAdd, onDecrease } from "./index.redux";

const mapStateProps = state => {
  return { num: state };
};

const actionCreators = { onAdd, onDecrease };

// componentName = connect(
//   mapStateProps,
//   actionCreators
// )(componentName);

@connect(
  mapStateProps,
  actionCreators
)
class componentName extends Component {
  render() {
    return (
      <div>
        <div>Hello React {this.props.num}</div>
        <button onClick={this.props.onAdd}>+</button>
        <button onClick={this.props.onDecrease}>-</button>
      </div>
    );
  }
}

export default componentName;
