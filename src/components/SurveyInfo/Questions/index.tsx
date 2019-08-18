import React, { FunctionComponent, useCallback } from "react";
import { ISurveyQuestion } from "models/survey";
import SurveyInfoQuestionItem from "./QuestionItem";

/**
 * The component props.
 */
interface IProps {
  questions: ISurveyQuestion[];
  selectedOptions: { [key: string]: string; };
  onChangeSelectedOptions: Function;
}

/**
 * Updates selected options.
 * @param questionId - A string with question id.
 * @param value - A new value for certain question.
 * @param onChangeSelectedOptions - A function for update selected options.
 * @param selectedOptions - An object with selected options.
 */
function onOptionChanged(questionId: string, value: string, onChangeSelectedOptions: Function, selectedOptions: { [key: string]: string; }) {
  selectedOptions = Object.assign({}, selectedOptions);
  selectedOptions[questionId] = value;

  onChangeSelectedOptions(selectedOptions);
}

/**
 * Gets components of instance SurveyInfoQuestionItem by questions
 * @param questions - A list with ISurveyQuestion instances.
 * @returns A list SurveyInfoQuestionItem components.
 */
function getSurveyInfoQuestionItems(questions: ISurveyQuestion[], onChangeSelectedOptions: Function, selectedOptions: any) {
  const onOptionChangedCallback = useCallback((key, value) => {
    onOptionChanged(key, value, onChangeSelectedOptions, selectedOptions);
  }, [onChangeSelectedOptions, selectedOptions]);

  return questions.map((item) => {
    return <SurveyInfoQuestionItem
      selectedOption={selectedOptions[item.id]}
      key={item.id}
      question={item}
      onChangeItem={onOptionChangedCallback} />;
  });
}

/**
 * A component with a info about survey.
 * @param props - A props for component.
 */
const SurveyInfoQuestions: FunctionComponent<IProps> = (props) => {
  const { questions, selectedOptions, onChangeSelectedOptions } = props;

  return (
    <>
      {getSurveyInfoQuestionItems(questions, onChangeSelectedOptions, selectedOptions)}
    </>
  );
};

export default SurveyInfoQuestions;
