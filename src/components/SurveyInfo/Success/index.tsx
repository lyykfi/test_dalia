import React, { FunctionComponent } from "react";
import { ISurveyInfo } from "models/survey";
import { Typography } from 'antd';

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
const SurveyInfoSuccess: FunctionComponent<IProps> = (props) => {
    const { surveyInfo } = props;

    return (
        <>
            <Typography.Title>{surveyInfo.title}</Typography.Title>
            <Typography.Paragraph>You successfull finished this survey. Thanks for answering the survey!</Typography.Paragraph>
        </>
    );
};

export default SurveyInfoSuccess;
