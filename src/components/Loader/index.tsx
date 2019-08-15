import React, { FunctionComponent } from "react";
import { Icon } from 'antd';

import "./style.less";

/**
 * A component with a loader.
 * @param props - A props for component.
 */
const Loader: FunctionComponent<{}> = () => {
  return (
    <div className="loader"><Icon type="loading" /></div>
  );
};

export default Loader;
