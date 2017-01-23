import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
let $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';



describe('Clock', () => {

  it('Should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>)
      let $el = $(ReactDOM.findDOMNode(clock));
      let actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    })
  })
  describe('formatSeconds', () => {
    it('Should format seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 567;
      let expected = '09:27';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('Should format seconds when min/sec are less than 10', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 61;
      let expected = '01:01';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
