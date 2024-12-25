import { ROUTERS } from "./utils/router";
import Homepage from "./pages/user/homepage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Homepage />,
    },
  ];

  return (
    <Routes>
      {userRouters.map((item, key) => (
        <Route key={key} path={item.path} element={item.component} />
      ))}
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
