import React from 'react';

export default class Controls extends React.Component {

  onStatusChange(newStatus){
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }

  render(){
    let {countdownStatus} = this.props;
    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused').bind(this)}>Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started').bind(this)}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped').bind(this)}>Clear</button>
      </div>
    )
  };
};

Controls.propTypes = {
  countdownStatus : React.PropTypes.string.isRequired,
  onStatusChange : React.PropTypes.func.isRequired
};
