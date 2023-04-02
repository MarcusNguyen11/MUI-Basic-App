import React from "react";
import { useState } from "react";
import { FormProvider, FTextField, FCheckBox } from "../components/form";
import { useForm, useFormContext, Controller } from "react-hook-form";
import { Stack } from "@mui/system";
import {
  Alert,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LoginPage() {
  const defaultValues = {
    username: "tuannv",
    password: "123",
    remember: true,
  };

  const methods = useForm({ defaultValues });
  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setError("afterSubmit", { message: "Server Response Error" });
  };
  return (
    <div>
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
          type="submid"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </FormProvider>
    </div>
  );
}

export default LoginPage;
