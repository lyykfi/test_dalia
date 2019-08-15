import SurveysPage from "components/SurveysPage";
import SurveyInfoPage from "components/SurveyInfoPage";

/**
 * Interfacte for router.
 */
export interface IRoute {
  path: string;
  exact?: boolean;
  component: any;
}

/**
 * A list with router.
 */
export const router: IRoute[] = [
  {
    component: SurveysPage,
    exact: true,
    path: "/",
  },
  {
    component: SurveyInfoPage,
    path: "/survey/:id",
  },
];
