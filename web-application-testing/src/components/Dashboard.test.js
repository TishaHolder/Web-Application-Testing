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


    

})
