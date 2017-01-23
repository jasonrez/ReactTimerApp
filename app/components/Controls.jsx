import React from 'react';

export default class Controls extends React.Component {

  render(){
    let {countdownStatus} = this.props;
    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    };

    return (
      <div className="controls">
        <button className="button alert hollow">Clear</button>
        {renderStartStopButton()}
      </div>
    )
  };
};

Controls.propTypes = {
  countdownStatus : React.PropTypes.string.isRequired
};
