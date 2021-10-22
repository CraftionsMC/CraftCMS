/**
 * @author The Craftions Developers <github.com/CraftionsMC>
 * @copyright (c) 2018-2021 Craftions.net. All rights reserved.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Editor from "./compoenents/Editor/Editor";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route path={"/editor"} exact component={Editor} />
      </Switch>
    </BrowserRouter>
  </>,
  document.querySelector("#root")
);
