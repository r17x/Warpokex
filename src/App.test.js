import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test.todo('User can browse pokemon in infinite list - User can view detailed information of each pokemon')
test.todo('User can view the image of each pokemon')
test.todo('User can filter list of pokemon based on an attribute of pokemon (feel free to choose one attribute to use for filtering i.e. nature, types)')
