import React, { FunctionComponent } from "react";
import { ISurveyListItem } from "models/survey";
import { Card } from "antd";
import { Link } from "react-router-dom";

import "./style.less";

/**
 * Props for component.
 */
interface Props {
  surveyListItem: ISurveyListItem;
}

/**
 * Gets a link to survey.
 * @param surveyListItem - A survey model.
 */
function getLinkToSurveyInfo(surveyListItem: ISurveyListItem) {
    return <Link to={`/survey/${surveyListItem.id}`}>{surveyListItem.title}</Link>;
}

/**
 * A component with a list of survey.
 * @param props - A props for component.
 */
const SurveyListItem: FunctionComponent<Props> = (props) => {
  const { surveyListItem } = props;

  return (
    <Card title={getLinkToSurveyInfo(surveyListItem)} className="card-item">
      {surveyListItem.tagline}
    </Card>
  );
};

export default SurveyListItem;
