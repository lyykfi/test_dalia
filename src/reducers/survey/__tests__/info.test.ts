import {
    FETCH_SURVEY_INFO, SURVEY_INFO_RECIEVED,
    UPDATE_SELECTED_OPTIONS, SURVEY_INFO_FAILED
} from "consts/surveys";
import surveysInfo, { initState } from "../info";

describe('surveysInfo reducer', () => {
    it('should return the initial state', () => {
        expect(surveysInfo(undefined, {})).toEqual(initState);
    });

    it('should return FETCH_SURVEY_INFO state', () => {
        expect(surveysInfo(undefined, { type: FETCH_SURVEY_INFO, payload: 101 })).toEqual({
            isFetching: true,
            error: null,
            surveyInfo: null,
            selectedOptions: {},
            surveyId: 101,
        });
    });

    it('should return SURVEY_INFO_RECIEVED state', () => {
        expect(surveysInfo(undefined, { type: SURVEY_INFO_RECIEVED, payload: ['test'] })).toEqual({
            isFetching: false,
            error: null,
            selectedOptions: {},
            surveyId: null,
            surveyInfo: ['test'],
        });
    });

    it('should return SURVEY_INFO_FAILED state', () => {
        expect(surveysInfo(undefined, { type: SURVEY_INFO_FAILED, payload: ['test'] })).toEqual({
            isFetching: false,
            error: ['test'],
            surveyInfo: null,
            selectedOptions: {},
            surveyId: null,
        });
    });

    it('should return UPDATE_SELECTED_OPTIONS state', () => {
        expect(surveysInfo(undefined, { type: UPDATE_SELECTED_OPTIONS, payload: ['test'] })).toEqual({
            selectedOptions: ['test'],
            error: null,
            isFetching: false,
            surveyId: null,
            surveyInfo: null,
        });
    });
});