import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.scss';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter >
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);
