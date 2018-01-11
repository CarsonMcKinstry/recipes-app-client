import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import store from "./store/";
import { AUTH_SUCCESS } from "./store/types";

const token = localStorage.getItem("token");
if (token) {
  store.dispatch({ type: AUTH_SUCCESS, payload: token });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
