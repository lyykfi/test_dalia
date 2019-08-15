import React, { FunctionComponent } from "react";
import AppRouters from "components/Routers";

import "antd/dist/antd.css";

/**
 * Main app compinent.
 * @param props - A props for component.
 */
const App: FunctionComponent<{}> = (props) => {
  return (
    <AppRouters>
      {props.children}
    </AppRouters>
  );
};

export default App;
