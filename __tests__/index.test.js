import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../pages/index';

describe('IndexPage', () => {
  it('renders the page header', () => {
    const wrapper = shallow(<IndexPage />);
    const header = wrapper.find('h1');
    expect(header.text()).toEqual('Weightloss Percent per Week');
  });

  it('renders an input field for weight', () => {
    const wrapper = shallow(<IndexPage />);
    const input = wrapper.find('input#weight-input');
    expect(input.exists()).toBe(true);
  });

  it('renders a button to update the chart', () => {
    const wrapper = shallow(<IndexPage />);
    const button = wrapper.find('button');
    expect(button.text()).toEqual('Update Chart');
  });

  it('updates the chart data when a valid weight is entered', () => {
    const wrapper = shallow(<IndexPage />);
    const input = wrapper.find('input#weight-input');
    const button = wrapper.find('button');
    input.simulate('change', { target: { value: '150' } });
    button.simulate('click');
    const plotlyChart = wrapper.find('PlotlyChart');
    expect(plotlyChart.prop('data')[0].x).toContain(150);
  });

  it('does not update the chart data when an invalid weight is entered', () => {
    const wrapper = shallow(<IndexPage />);
    const input = wrapper.find('input#weight-input');
    const button = wrapper.find('button');
    input.simulate('change', { target: { value: 'not a number' } });
    button.simulate('click');
    const plotlyChart = wrapper.find('PlotlyChart');
    expect(plotlyChart.prop('data')[0].x).not.toContain(NaN);
  });
});
