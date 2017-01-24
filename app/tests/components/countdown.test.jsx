import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
let $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import Countdown from 'Countdown';

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {

        let countdown = TestUtils.renderIntoDocument(<Countdown/>);

        it('should set state to started and countdown', (done) => {
            //let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001)
        });

        it('count should never be a negative number', (done) => {
            //let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001)
        })

        it('should pause countdown on paused status', (done) => {
          countdown.handleSetCountdown(3);
          countdown.handleStatusChange('paused');

          setTimeout(() => {
            expect(countdown.state.count).toBe(3);
            expect(countdown.state.countdownStatus).toBe('paused');
            done();
          },1001)
        })

        it('should stop countdown on stopped status', (done) => {
          countdown.handleSetCountdown(5);
          countdown.handleStatusChange('stopped');

          setTimeout(() => {
            expect(countdown.state.count).toBe(0);
            expect(countdown.state.countdownStatus).toBe('stopped');
            done();
          },1001)
        })
    })
})
