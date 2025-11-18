import {
  Routes, Route,
} from "react-router";
import paths from "./paths";
import Layout from "./components/layout/Layout";
import AuthWrapper from "./components/layout/AuthWrapper";
import LoginRoute from "./components/routes/LoginRoute";

const ReactRoutes = () => {
  return (
    <Routes>
      <Route element={(
        <AuthWrapper>
          <Layout />
        </AuthWrapper>
      )}
      >
        <Route element={<div>Homepagerino</div>} index />
        <Route element={<div>bagr</div>} path={paths.bagr.path} />
        <Route element={<LoginRoute />} path={paths.login.path} />
      </Route>
    </Routes>
  );
};

export default ReactRoutes;
