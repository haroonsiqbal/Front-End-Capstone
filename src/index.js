import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom"
import JavaJuice from './components/JavaJuice'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Router>
        <JavaJuice />
    </Router>
    , document.getElementById('root'));


