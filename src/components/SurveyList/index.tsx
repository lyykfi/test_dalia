import React, { FunctionComponent } from "react";
import Loader from "components/Loader";
import SurveyListItem from "./Item";
import { ISurveyListItem } from "models/survey";

/**
 * Props for component.
 */
interface Props {
  surveyList: ISurveyListItem[];
}

/**
 * Gets a list with SurveyListItem components.
 * @param surveyList - A list with surveys.
 */
function getSurveysList(surveyList: ISurveyListItem[]) {
  return surveyList.map((item) => {
    return <SurveyListItem key={item.id} surveyListItem={item} />;
  })
}

/**
 * A component with a list of survey.
 * @param props - A props for component.
 */
const SurveyList: FunctionComponent<Props> = (props) => {
  const { surveyList } = props;

  return (
    <>{!surveyList ? <Loader /> : getSurveysList(surveyList)}</>
  );
};

export default SurveyList;
