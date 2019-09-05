import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display.js";

describe("<Display />", () => {
    //clean up after each test! Otherwise the simulated, in-memory DOM we render our components in will just get 
    //larger and larger.
    //afterEach(cleanup);

    it("renders without crashing", () => {

        render( <Display />);

    });

    //tests if strikes display card is on the screen
    test('contains Strikes Display Card', () => {
        // Arrange
        const { getByText } = render(<Display />);

        // Act - getting the node by text
        getByText(/Strikes/i);
        
        // Assertion is if ^^^ is truthy
    });

    //tests if balls display card is on the screen
    test('contains Balls Display Card', () => {

        // Arrange
        const { getByText } = render(<Display />);

        // Act - getting the node by text
        getByText(/Balls/i);
        
        // Assertion is if ^^^ is truthy
    });


     



})

