/**
 * @todo add comment
 */
export interface ISurveyListItem {
    id: string;
    title: string;
    tagline: string;
}

/**
 * @todo add comment
 */
export interface ISurveyQuestion {
    id: string;
    title: string;
    options: string[];
}

/**
 * @todo add comment
 */
export interface ISurveyInfo extends ISurveyListItem {
    questions: ISurveyQuestion[];
}
