import React, { FunctionComponent, useCallback } from "react";
import { ISurveyInfo } from "models/survey";
import { Typography, Button } from 'antd';
import SurveyInfoQuestions from "./Questions";

/**
 * The component props.
 */
interface IProps {
    surveyInfo: ISurveyInfo;
    selectedOptions: { [key: string]: string; };
    onChangeSelectedOptions: Function;
    onSurveyComplete: Function;
}

/**
 * A component with a info about survey.
 * @param props - A props for component.
 */
const SurveyInfo: FunctionComponent<IProps> = (props) => {
    const {
        surveyInfo, selectedOptions, 
        onChangeSelectedOptions, onSurveyComplete } = props;

    // on click callback.
    const callbackOnClick = useCallback(() => {
        onSurveyComplete(selectedOptions);
    }, [selectedOptions]);

    return (
        <>
            <Typography.Title>{surveyInfo.title}</Typography.Title>
            <Typography.Paragraph>{surveyInfo.tagline}</Typography.Paragraph>
            <SurveyInfoQuestions
                questions={surveyInfo.questions}
                selectedOptions={selectedOptions}
                onChangeSelectedOptions={onChangeSelectedOptions}></SurveyInfoQuestions>
            <Button type="primary" onClick={callbackOnClick}>Done</Button>
        </>
    );
};

export default SurveyInfo;
