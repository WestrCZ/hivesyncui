import {
  Box, Button, Paper, Typography, TextField,
} from "@mui/material";
import {
  useState, useCallback,
} from "react";
import { useNavigate } from "react-router";
import useUserStore from "../../../stores/useUserStore";
import paths from "../../../paths";
const Login = () => {
  const setUserDetail = useUserStore((state) => state.setUserDetail);

  const [loginName, setLoginName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const login = useCallback(async () => {
    if (loginName?.trim() && password?.trim()) {
      setIsLoading(true);
      try {
        const userData = await Promise.resolve({
          name: "Franta Pepa",
          surname: "Jednička",
        });
        console.log(userData);
        setUserDetail(userData);
      }
      catch {
        // Handle login error
      }
      finally {
        setIsLoading(false);
        await navigate(paths.basePath.generate());
      }
    }
  }, [
    loginName,
    navigate,
    password,
    setUserDetail,
  ]);

  return (
    <Box alignItems="center" display="flex" justifyContent="center" minHeight="100vh">
      <Paper variant="outlined">
        <Typography variant="h1">Přihlášení</Typography>
        <TextField label="Přihlašovací jméno" onChange={(e) => { setLoginName(e.target.value); }} value={loginName} />
        <TextField label="Heslo" onChange={(e) => { setPassword(e.target.value); }} type="password" value={password} />
        <Button loading={isLoading} onClick={login}>Přihlásit se</Button>
      </Paper>
    </Box>
  );
};
export default Login;
