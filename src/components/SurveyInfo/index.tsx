import React, { FunctionComponent } from "react";
import { ISurveyInfo } from "models/survey";
import { Typography } from 'antd';
import SurveyInfoQuestions from "./Questions";

/**
 * The component props.
 */
interface IProps {
  surveyInfo: ISurveyInfo;
}

/**
 * A component with a info about survey.
 * @param props - A props for component.
 */
const SurveyInfo: FunctionComponent<IProps> = (props) => {
  const { surveyInfo } = props;

  return (
    <>
        <Typography.Title>{surveyInfo.title}</Typography.Title>
        <Typography.Paragraph>{surveyInfo.tagline}</Typography.Paragraph>
        <SurveyInfoQuestions questions={surveyInfo.questions}></SurveyInfoQuestions>
    </>
  );
};

export default SurveyInfo;
