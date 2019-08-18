import {
    CREATE_SURVEY_COMPLETION, CREATE_SURVEY_COMPLETION_FAIL, CLEAR_SURVEY_COMPLETION, CREATE_SURVEY_COMPLETION_RECIEVED
} from "consts/surveys";
import surveysCompletion, { RESPONSE_STATUSES, initState } from "../completion";

describe('surveysCompletion reducer', () => {
    it('should return the initial state', () => {
        expect(surveysCompletion(undefined, {})).toEqual(initState);
    });

    it('should return CREATE_SURVEY_COMPLETION state', () => {
        expect(surveysCompletion(undefined, { type: CREATE_SURVEY_COMPLETION })).toEqual({
            isFetching: true,
            isSuccess: false,
            error: null,
        });
    });

    it('should return CREATE_SURVEY_COMPLETION_RECIEVED state success', () => {
        expect(surveysCompletion(undefined, { type: CREATE_SURVEY_COMPLETION_RECIEVED, payload: {status: RESPONSE_STATUSES.OK,} })).toEqual({
            isFetching: false,
            isSuccess: true,
            error: null,
        });
    });

    it('should return CREATE_SURVEY_COMPLETION_FAIL state', () => {
        expect(surveysCompletion(undefined, { type: CREATE_SURVEY_COMPLETION_FAIL, payload: ['test'] })).toEqual({
            isFetching: false,
            error: ['test'],
            isSuccess: false,
        });
    });

    it('should return CLEAR_SURVEY_COMPLETION state', () => {
        expect(surveysCompletion(undefined, { type: CLEAR_SURVEY_COMPLETION, payload: ['test'] })).toEqual({
            isFetching: false,
            error: null,
            isSuccess: false,
        });
    });
});