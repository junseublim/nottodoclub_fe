import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import BottomTab from "@/components/layout/BottomTab";
import List from "@/pages/List";
import Badge from "@/pages/Badge";
import MyPage from "@/pages/MyPage";
import ListAdd from "@/pages/ListAdd";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <Outlet />
        <BottomTab />
      </>
    ),
    errorElement: <>Error Page</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/list/add",
        element: <ListAdd />,
      },
      {
        path: "/badge",
        element: <Badge />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
