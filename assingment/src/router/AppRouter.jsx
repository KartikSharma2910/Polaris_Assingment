import routes from "constants/routes";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, element: Element }, index) => (
        <Route key={index} path={path} element={<Element />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
