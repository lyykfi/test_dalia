import React, { FunctionComponent, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSurveyInfo, updateSelectedOptions, createSurveyCompletion, clearSurveyCompletion } from "actions/surveys";
import SurveyInfo from ".";
import Loader from "components/Loader";
import SurveyInfoSuccess from "./Success";

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
    const isCompletionSuccess = useSelector((state: any) => state.surveyCompletion.isSuccess);
    const selectedOptions = useSelector((state: any) => state.surveysInfo.selectedOptions);

    const onChangeSelectedOptionsCallback = useCallback((selectedOptions) => {
        dispatch(updateSelectedOptions(selectedOptions));
    }, [selectedOptions]);

    const onSurveyCompleteCallback = useCallback((selectedOptions) => {
        dispatch(createSurveyCompletion(surveyId, selectedOptions));
    }, [surveyId, selectedOptions]);

    // fetch a info.
    if ((!surveyInfo || surveyStoredId !== surveyId) && !isFetching) {
        dispatch(clearSurveyCompletion());
        dispatch(fetchSurveyInfo(surveyId));
    }

    if (isFetching) {
        return <Loader />;
    }

    if (isCompletionSuccess) {
        return <SurveyInfoSuccess surveyInfo={surveyInfo} />;
    }

    return (
        surveyInfo && <SurveyInfo
            surveyInfo={surveyInfo}
            selectedOptions={selectedOptions}
            onChangeSelectedOptions={onChangeSelectedOptionsCallback}
            onSurveyComplete={onSurveyCompleteCallback} />
    );
};

export default SurveyInfoContainer;
