/**
 * A survey list item interface.
 */
export interface ISurveyListItem {
    id: string;
    title: string;
    tagline: string;
}

/**
 * A survey question interface.
 */
export interface ISurveyQuestion {
    id: string;
    title: string;
    options: string[];
}

/**
 * A survey info interface.
 */
export interface ISurveyInfo extends ISurveyListItem {
    questions: ISurveyQuestion[];
}

/**
 * A survey response interface.
 */
export interface ISurveyResponse {
    question_id: string;
    value: string;
}
