import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('spy using prototype', () => {
  it('calls "handleButtonClick()" on button click - using prototype', () => {
      const spy = jest.spyOn(App.prototype, 'handleButtonClick');
      const wrapper = shallow(<App />);
      wrapper.find('button').simulate('click', 'using prototype');
      expect(spy).toHaveBeenCalled();
    });

    // FAILS due to class properties not being on prototype
    it('calls "handleAnchorClick()" on anchor click - using prototype', () => {
      const spy = jest.spyOn(App.prototype, 'handleAnchorClick');
      const wrapper = shallow(<App />);
      wrapper.find('a').simulate('click', 'using prototype');
      expect(spy).toHaveBeenCalled();
    });
});

describe('spy using instance with mount', () => {
  it('calls "handleButtonClick()" on button click - using instance with jest.spyOn', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(wrapper.instance(), 'handleButtonClick');
    wrapper.update();
    wrapper.find('button').simulate('click', 'jest.spyOn');
    expect(spy).toHaveBeenCalled();
  });

  it('calls "handleAnchorClick()" on button click - using instance with sinon.spy', () => {
    const wrapper = mount(<App />);
    const spy = sinon.spy(wrapper.instance(), 'handleAnchorClick');
    wrapper.update();
    wrapper.find('a').simulate('click', 'sinon.spy');
    expect(spy.called).toBe(true);
  });
});

// FAILS due to shallow(), not sure why but mount() works as you can see above
describe('spy using instance with shallow', () => {
  it('calls "handleButtonClick()" on button click - using instance with jest.spyOn', () => {
    const wrapper = shallow(<App />);
    const spy = jest.spyOn(wrapper.instance(), 'handleButtonClick');
    wrapper.update();
    wrapper.find('button').simulate('click', 'jest.spyOn');
    expect(spy).toHaveBeenCalled();
  });

  it('calls "handleAnchorClick()" on button click - using instance with sinon.spy', () => {
    const wrapper = shallow(<App />);
    const spy = sinon.spy(wrapper.instance(), 'handleAnchorClick');
    wrapper.update();
    wrapper.find('a').simulate('click', 'sinon.spy');
    expect(spy.called).toBe(true);
  });
});


