import { ROUTERS } from "./utils/router";
import Homepage from "./pages/user/homepage";
import { React } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./pages/user/theme/MainLayout";
import Profilepage from "./pages/user/profilepage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Homepage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <Profilepage />,
    },
  ];

  return (
    <MainLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MainLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
