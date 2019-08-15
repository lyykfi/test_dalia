import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";

import AppRouters from "components/Routers";
import { getStore } from "store/index";

import "antd/dist/antd.css";

/**
 * Main app compinent.
 * @param props - A props for component.
 */
const App: FunctionComponent<{}> = () => {
  return (
    <Provider store={getStore()}>
      <AppRouters />
    </Provider>
  );
};

export default App;
