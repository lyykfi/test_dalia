import React, { FunctionComponent } from "react";
import { Layout as AntLayout } from 'antd';

const { Header, Content } = AntLayout;

import "./style.less";


/**
 * A component with layout.
 * @param props - A props for component.
 */
const Layout: FunctionComponent<IProps> = (props) => {
  return (
    <AntLayout className="layout">
        <Header></Header>
        <Content className="content">
            {props.children}
        </Content>
    </AntLayout>
  );
};

export default Layout;
