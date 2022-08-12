import HelloMessage from './components/HelloMessage'
import ReactDOM from "react-dom";
import React from "react";
import "./index.sass";

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('root')
);

// ECMAscript: syntax standard; ES5, ES6, ES7...
// Javascript: ECMAscript + WebAPI(DOM, fetch...)
// Node: EMCAscript + NodeAPI(require, fs, http...)