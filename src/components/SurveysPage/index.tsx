import React, { FunctionComponent } from "react";
import SurveyListContainer from "components/SurveyList/container";
import Layout from "components/Layout";

import "antd/dist/antd.css";

/**
 * A component with surveys page data.
 * @param props - A props for component.
 */
const SurveysPage: FunctionComponent<{}> = () => {
  return (
    <Layout>
      <SurveyListContainer />
    </Layout>
  );
};

export default SurveysPage;
