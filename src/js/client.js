import React from "react"
import ReactDOM from "react-dom"
import App from "./pages/App"
import "../css/libs.css"
import "../css/styles.css"
import "../../public/js/main"
import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('app')

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, app);
