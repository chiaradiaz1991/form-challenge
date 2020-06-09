import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';



it('renders without crashing', () => { // check if the component renders
  const div = document.createElement('div');
  const props = {
    value: true
  }
  ReactDOM.render(<Select {...props} />, div);
});


describe('<Select />', () => {
  let wrapper; // initializing a wrapper variable that we will use the mount function available through Enzyme to have a copy of our component.
  const setState = jest.fn(); // mock function to spy the behavior
  const useStateSpy = jest.spyOn(React, "useState") // check that React's useState function is called
  useStateSpy.mockImplementation((init) => [init, setState]);
  beforeEach(() => { //beforeEach functions to mount our component
    wrapper = Enzyme.mount(Enzyme.shallow(<Select />).get(0))
  });
  afterEach(() => { // afterEach  clear all jest mocks
    jest.clearAllMocks();
  })
})
