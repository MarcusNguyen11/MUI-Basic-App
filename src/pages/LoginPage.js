import React from "react";
import { useState } from "react";
import { FormProvider, FTextField, FCheckBox } from "../components/form";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/system";
import { Alert, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function LoginPage({ setIsLogin, isLogin }) {
  const navigate = useNavigate();
  const defaultValues = {
    username: "tuannv",
    password: "123456789",
    remember: true,
  };

  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);
  console.log(isLogin);
  const onSubmit = (data) => {
    console.log(data);
    navigate(`/`);
    console.log(isLogin);
    setIsLogin(true);
  };

  return (
    <div className="login">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <FTextField name="username" label="Username" />
          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FCheckBox name="remeber" label="Remember me" />
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => navigate(-1)}
        >
          Exit
        </Button>
      </FormProvider>
    </div>
  );
}

export default LoginPage;
