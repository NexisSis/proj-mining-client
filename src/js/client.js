import React from "react"
import ReactDOM from "react-dom"
import App from "./main/App"
import "../../public/js/main/main"
import "../../public/js/main/libs.min"
import "../css/main/styles.css"

import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('app')

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, app);
