import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSurveyList } from "actions/surveys"; 
import SurveyList from ".";
import Loader from "components/Loader";

/**
 * A component with a list of survey.
 * @param props - A props for component.
 */
const SurveyListContainer: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const surveyList = useSelector((state: any) => state.surveys.surveyList);
  const isFetching = useSelector((state: any) => state.surveys.isFetching);

  // fetch a list.
  if (!surveyList && !isFetching) {
    dispatch(fetchSurveyList());
  }

  return (
    isFetching ? <Loader /> : <SurveyList surveyList={surveyList} />
  );
};

export default SurveyListContainer;
