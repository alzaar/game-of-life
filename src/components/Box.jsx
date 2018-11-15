import React from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.selectBox = this.selectBox.bind(this);
  }

  selectBox() {
    this.props.selectBox(this.props.row, this.props.col)
  }
  render() {
    <div
      className={this.props.boxClass}
      id={this.props.id}
      onClick={this.selectBox}
      />
  }
}
