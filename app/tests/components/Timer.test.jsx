import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery';

import Timer from 'Timer';

describe('Timer', () =>{
  it('should exist', () => {
    expect(Timer).toExist();
  })

  it('should start timer on started status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() =>{
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    },1001);
  })

  it('should stop timer on stopped status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChange('started');

    setTimeout( () => {
      timer.handleStatusChange('stopped');
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
      done();
    },1001);
  })

  it('should pause timer on paused status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChange('started');

    setTimeout( () => {
      timer.handleStatusChange('paused');
      setTimeout( () => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      },1001)
    },3001)
  })
})
