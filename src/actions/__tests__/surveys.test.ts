import { 
    fetchSurveyList, fetchSurveyInfo, updateSelectedOptions,
    createSurveyCompletion, clearSurveyCompletion
} from "actions/surveys";
import {
    FETCH_SURVEY_LIST, FETCH_SURVEY_INFO, UPDATE_SELECTED_OPTIONS,
    CLEAR_SURVEY_COMPLETION, CREATE_SURVEY_COMPLETION
} from "consts/surveys";

describe('surveys actions', () => {
    it('fetchSurveyList return checking', () => {
        expect(fetchSurveyList()).toEqual({
            type: FETCH_SURVEY_LIST,
        });
    });

    it('fetchSurveyInfo return checking', () => {
        expect(fetchSurveyInfo('10')).toEqual({
            type: FETCH_SURVEY_INFO,
            payload: '10',
        });
    });

    it('updateSelectedOptions return checking', () => {
        const options = {"test": "result", "test2": "result2"};

        expect(updateSelectedOptions(options)).toEqual({
            type: UPDATE_SELECTED_OPTIONS,
            payload: options,
        });
    });

    it('createSurveyCompletion return checking', () => {
        const options = {"test": "result", "test2": "result2"};

        expect(createSurveyCompletion('10', options)).toEqual({
            type: CREATE_SURVEY_COMPLETION,
            payload: { surveyId: '10', selectedOptions: {
                completion: [{
                    "question_id": "test",
                    "value": "result",
                }, {
                    "question_id": "test2",
                    "value": "result2",
                }]
            }, },
        });
    });

    it('clearSurveyCompletion return checking', () => {
        expect(clearSurveyCompletion()).toEqual({
            type: CLEAR_SURVEY_COMPLETION,
        });
    });
});