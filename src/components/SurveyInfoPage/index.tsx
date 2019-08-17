import React, { FunctionComponent } from "react";
import Layout from "components/Layout";
import GoBackButton from "components/GoBackButton";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import SurveyInfoContainer from "components/SurveyInfo/container";

import "./style.less";

/**
 * A component with info about a certan survey.
 * @param props - A props for component.
 */
const SurveyInfoPage: FunctionComponent<RouteComponentProps> = (props) => {
  const { match } = props;
  const { params } = match;

  return (
    <Layout>
      <div className="survey-info-page">
        <section className="left-button">
          <GoBackButton />
        </section>
        <section className="servey">
          <SurveyInfoContainer surveyId={(params as any).id} />
        </section>
      </div>
    </Layout>
  );
};

export default withRouter(SurveyInfoPage);
