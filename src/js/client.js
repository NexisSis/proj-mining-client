import React from "react"
import ReactDOM from "react-dom"
import App from "./pages/App"
import "../css/styles.css"
import "../css/libs.css"
import "../../public/js/main"
import "../../public/js/libs.min"
import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('app')

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, app);
