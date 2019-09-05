import React from "react";
//import * as rtl from '@testing-library/react'; //rtl - react testing library
import Dashboard from "./Dashboard.js";
import { render } from "@testing-library/react";


describe ("<Dashboard />", ()=> {

    //clean up after each test! Otherwise the simulated, in-memory DOM we render our components in will just get 
    //larger and larger.
    //afterEach(render.cleanup);

    it ( "renders without crashing", ()=> {

        render (<Dashboard />);

    });

     //tests if strike button is on the dashboard
     test('contains Strike Button', () => {

        // Arrange
        const { getByText } = render(<Dashboard />);

        // Act - getting the node by text
        getByText(/strike/i);
        
        // Assertion is if ^^^ is truthy
    });

    //tests if ball button is on the dashboard
    test('contains Strike Button', () => {

        // Arrange
        const { getByText } = render(<Dashboard />);

        // Act - getting the node by text
        getByText(/ball/i);
        
        // Assertion is if ^^^ is truthy
    });

    //tests if foul button is on the dashboard
    test('contains Ball Button', () => {

        // Arrange
        const { getByText } = render(<Dashboard />);

        // Act - getting the node by text
        getByText(/foul/i);
        
        // Assertion is if ^^^ is truthy
    });

     //tests if hit button is on the dashboard
     test('contains Hit Button', () => {

        // Arrange
        const { getByText } = render(<Dashboard />);

        // Act - getting the node by text
        getByText(/hit/i);
        
        // Assertion is if ^^^ is truthy
    });



    

})
