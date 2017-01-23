import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
let $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import Controls from 'Controls';


describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  })

  describe('render', () =>{

    it('when passed started should show pause button', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    })

    it('when passed paused should show start button', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    })

  })
});
