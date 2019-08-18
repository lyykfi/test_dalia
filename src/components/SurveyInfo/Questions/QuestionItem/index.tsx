import React, { FunctionComponent } from "react";
import { ISurveyQuestion } from "models/survey";
import { Card, Radio } from "antd";

import "./style.less";

/**
 * The component props.
 */
interface IProps {
    question: ISurveyQuestion;
    onChangeItem: Function;
    selectedOption: string | null;
}

/**
 * Gets options radio buttons.
 * @param options - A list with options.
 * @param selectedOption - A string with selected option.
 */
function getOptions(options: string[], selectedOption: string | null) {
    const items = options.map((item, key) => {
        return <Radio.Button value={item} key={key}>{item}</Radio.Button>
    })

    return <Radio.Group defaultValue={selectedOption}>{items}</Radio.Group>
}

/**
 * Changes selected option.
 * @param id - A string with id of question
 * @param onChangeItem - A function for changing value.
 * @param e - SyntheticEvent click.
 */
function onChange(id: string, onChangeItem: Function, e: any) {
    onChangeItem(id, e.target.value);
}

/**
 * A component with a info about survey.
 * @param props - A props for component.
 */
const SurveyInfoQuestionItem: FunctionComponent<IProps> = (props) => {
    const { question, onChangeItem, selectedOption } = props;

    return (
        <Card
            onChange={onChange.bind({}, question.id, onChangeItem)}
            title={question.title}
            className="question-item">
            {getOptions(question.options, selectedOption)}
        </Card>
    );
};

export default SurveyInfoQuestionItem;
