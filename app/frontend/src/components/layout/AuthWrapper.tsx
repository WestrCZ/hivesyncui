import {
  PropsWithChildren, useEffect,
} from "react";
import { useNavigate } from "react-router";
import useUserStore from "../../stores/useUserStore";
import paths from "../../paths";

const AuthWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const userDetail = useUserStore((state) => state.userDetail);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetail) {
      void navigate(paths.login.generate());
    }
  }, [navigate, userDetail]);

  return children;
};
export default AuthWrapper;
