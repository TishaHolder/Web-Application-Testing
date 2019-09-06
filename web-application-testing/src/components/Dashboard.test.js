import React from "react";
//import * as rtl from '@testing-library/react'; //rtl - react testing library
import Dashboard from "./Dashboard.js";
import { render } from "@testing-library/react";
import { strikesCount, ballsCount, hitCount } from '../App.js';



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

    test('strikesCount resets strikes to 0 if it is equal to 3', () => {
        expect(strikesCount(3)).toBe(0);
        expect(strikesCount(1)).toBe(2);
    });

    test('ballsCount resets balls to 0 if it is equal to 4', () => {
        expect(ballsCount(4)).toBe(0);
        expect(strikesCount(1)).toBe(2);
    });

    test('hitCount resets balls and strikes to 0', () => {
        expect(hitCount(4, 2)).toBe(0);
        expect(hitCount(1, 2)).toBe(0);
    });


         


    
})
