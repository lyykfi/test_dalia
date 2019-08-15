import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSurveyList } from "actions/surveys"; 

/**
 * A component with a list of survey.
 * @param props - A props for component.
 */
const SurveyListContainer: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const surveyList = useSelector((state: any) => {
    return state.counter;
  });

  if (!surveyList) {
    dispatch(fetchSurveyList());
  }

  return (
    <div>test2</div>
  );
};

export default SurveyListContainer;
