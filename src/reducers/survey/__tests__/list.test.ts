import surveys, { initState } from "../list";
import { FETCH_SURVEY_LIST, SURVEY_LIST_RECIEVED, SURVEY_LIST_FAILED } from "consts/surveys";

describe('surveys reducer', () => {
    it('should return the initial state', () => {
        expect(surveys(undefined, {})).toEqual(initState);
    });

    it('should return FETCH_SURVEY_LIST state', () => {
        expect(surveys(undefined, { type: FETCH_SURVEY_LIST })).toEqual({
            surveyList: null,
            isFetching: true,
            surveyListError: null,
        });
    });

    it('should return SURVEY_LIST_RECIEVED state', () => {
        expect(surveys(undefined, { type: SURVEY_LIST_RECIEVED, payload: ['test'] })).toEqual({
            surveyList: ['test'],
            isFetching: false,
            surveyListError: null,
        });
    });

    it('should return SURVEY_LIST_FAILED state', () => {
        expect(surveys(undefined, { type: SURVEY_LIST_FAILED, payload: ['test'] })).toEqual({
            isFetching: false,
            surveyListError: ['test'],
            surveyList: null,
        });
    });
});