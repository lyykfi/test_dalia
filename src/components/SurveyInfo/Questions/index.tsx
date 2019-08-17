import React, { FunctionComponent } from "react";
import { ISurveyQuestion } from "models/survey";
import SurveyInfoQuestionItem from "./QuestionItem";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedOption } from "actions/surveys";
import { Dispatch } from "redux";

/**
 * The component props.
 */
interface IProps {
  questions: ISurveyQuestion[];
}

function onOptionChanged(dispatch: Dispatch, questionId: string, value: string) {
  dispatch(updateSelectedOption(questionId, value));
}

/**
 * Gets components of instance SurveyInfoQuestionItem by questions
 * @param questions - A list with ISurveyQuestion instances.
 * @returns A list SurveyInfoQuestionItem components.
 */
function getSurveyInfoQuestionItems(questions: ISurveyQuestion[], dispatch: Dispatch, selectedOptions: any) {
  return questions.map((item) => {
    return <SurveyInfoQuestionItem
      selectedOption={selectedOptions[item.id]}
      key={item.id}
      question={item}
      onChangeItem={onOptionChanged.bind({}, dispatch)} />;
  });
}

/**
 * A component with a info about survey.
 * @param props - A props for component.
 */
const SurveyInfoQuestions: FunctionComponent<IProps> = (props) => {
  const { questions } = props;

  const dispatch = useDispatch();
  const selectedOptions = useSelector((state: any) => state.surveysInfo.selectedOptions);

  return (
    <>
      {getSurveyInfoQuestionItems(questions, dispatch, selectedOptions)}
      <Button type="primary">Done</Button>
    </>
  );
};

export default SurveyInfoQuestions;
