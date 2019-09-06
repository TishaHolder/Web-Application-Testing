import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//tests if baseball app header is on the screen
/*test('contains Baseball App Header', () => {

  // Arrange
  const { getByText } = render(<App />);

  // Act - getting the node by text
  getByText(/Baseball App/i);
  
  // Assertion is if ^^^ is truthy
});*/







