import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';



it('renders without crashing', () => { // check if the component renders
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('renders Form message', () => { //check if the form renders "Form" Title
  const wrapper = shallow(<App />);
  const welcome = <h2>Form</h2>; 
  expect(wrapper.contains(welcome)).toEqual(true);
});


describe('<App />', () => { 
  let wrapper; // initializing a wrapper variable that we will use the mount function available through Enzyme to have a copy of our component.
  const setState = jest.fn(); // mock function to spy the behavior
  const useStateSpy = jest.spyOn(React, "useState") // check that React's useState function is called
  useStateSpy.mockImplementation((init) => [init, setState]);
  beforeEach(() => { //beforeEach functions to mount our component
      wrapper = Enzyme.mount(Enzyme.shallow(<App />).get(0)) 
  });
  afterEach(() => { // afterEach  clear all jest mocks
      jest.clearAllMocks();
  })
})

describe('Test Button onSubmit component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn(); // mock function to spy the behavior
    const button = shallow((<button onClick={mockCallBack}>Submit</button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1); // expect component is called at least once",
  });
});