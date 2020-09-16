import HomePage from "../pages/home";
import AppPage from "../pages/app";
import HistoryPage from "../pages/history";

let routes = [
  {
    path: '/',
    component: HomePage,
  } ,
  {
    path: '/app/' ,
    component: AppPage
  } ,
  {
    path: '/history/' ,
    component: HistoryPage
  }
];

export default routes;
