import React, { FunctionComponent } from "react";
import Layout from "components/Layout";
import GoBackButton from "components/GoBackButton";

/**
 * A component with info about a certan survey.
 * @param props - A props for component.
 */
const SurveyInfoPage: FunctionComponent<{}> = (props) => {
  return (
    <Layout>
      <GoBackButton />
    </Layout>
  );
};

export default SurveyInfoPage;
