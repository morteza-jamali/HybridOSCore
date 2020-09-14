import HomePage from "../pages/home";
import AppPage from "../pages/app";

let routes = [
  {
    path: '/',
    component: HomePage,
  } ,
  {
    path: '/app/' ,
    component: AppPage
  }
];

export default routes;
