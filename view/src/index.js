import React from "react";
import ReactDom from "react-dom";
import RouteComponent from "./Route";
import { createStore, applyMiddleware, compose } from "redux";
import counter, { onAdd, onDecrease } from "./index.redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// 配合chrome调试工具
const reduxDevTools = window.devToolsExtension
  ? window.devToolsExtension()
  : () => {};

const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
    reduxDevTools
  )
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/else">其他</Link>
        </li>
        <li>
          <Link to="/404">404</Link>
        </li>
        <Switch>
          <Route path="/" exact component={RouteComponent} />
          <Route path="/else" component={() => "其他页面"} />
          <Route component={() => "404"} />
        </Switch>
      </ul>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
