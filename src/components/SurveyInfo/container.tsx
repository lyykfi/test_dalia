import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSurveyInfo } from "actions/surveys";
import SurveyInfo from ".";
import Loader from "components/Loader";

/**
 * The component props.
 */
interface IProps {
  surveyId: string;
}

/**
 * A component with a info about survey.
 * @param props - A props for component.
 */
const SurveyInfoContainer: FunctionComponent<IProps> = (props) => {
  const { surveyId } = props;
  const dispatch = useDispatch();

  const surveyStoredId = useSelector((state: any) => state.surveysInfo.surveyId);
  const surveyInfo = useSelector((state: any) => state.surveysInfo.surveyInfo);
  const isFetching = useSelector((state: any) => state.surveysInfo.isFetching);

  // fetch a info.
  if ((!surveyInfo || surveyStoredId !== surveyId) && !isFetching) {
    dispatch(fetchSurveyInfo(surveyId));
  }

  return (
    isFetching ? <Loader /> : surveyInfo ? <SurveyInfo surveyInfo={surveyInfo} /> : null
  );
};

export default SurveyInfoContainer;
