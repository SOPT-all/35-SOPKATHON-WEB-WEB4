import { RouteType } from '@type/routeType';
import HomePage from '@pages/HomePage/HomePage';
import MyPage from '@pages/MyPage/MyPage';
import Posting from '@pages/Posting/Posting';
import DetailPage from '@pages/DetailPage/DetailPage';
import routhPath from './routhPath';

const pageRoutes: RouteType[] = [
  {
    path: routhPath.HOME,
    element: <HomePage />,
  },
  {
    path: routhPath.DETAIL,
    element: <DetailPage />,
  },
  {
    path: routhPath.MYPAGE,
    element: <MyPage />,
  },
  {
    path: routhPath.POST,
    element: <Posting />,
  },
];

export default pageRoutes;
