import React from 'react';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const width = this.props.cols * 14;
    let rowsArr = [];

    let boxClass = '';

    for ( let i = 0; i < this.props.rows; i++ ) {
      for ( let j = 0; j < this.props.cols; j++ ) {
        let boxId = i + "_" + j;

        boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off';
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      }
    }


    return (
      <React.Fragment>
        <div className="grid" style={{width: width}}>

        </div>
      </React.Fragment>
    );
  }
}

export default Grid;
