import React, { FunctionComponent } from "react";
import { Button, Icon } from "antd";
import { Link } from "react-router-dom";

/**
 * A component with button go to back.
 * @param props - A props for component.
 */
const GoBackButton: FunctionComponent<{}> = () => {
  return (
    <Link to="/">
        <Button type="primary">
            <Icon type="left" />
            Backward
        </Button>
    </Link>
  );
};

export default GoBackButton;
