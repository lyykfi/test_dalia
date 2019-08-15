import React, { FunctionComponent } from "react";
import { Layout as AntLayout } from 'antd';

import "./style.less";

const { Header, Content } = AntLayout;

/**
 * A component with layout.
 * @param props - A props for component.
 */
const Layout: FunctionComponent<{}> = (props) => {
  return (
    <AntLayout className="layout">
        <Header>
            header
        </Header>
        <Content className="content">
            {props.children}
        </Content>
    </AntLayout>
  );
};

export default Layout;
