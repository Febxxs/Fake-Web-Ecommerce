import { Button, Input } from "@nextui-org/react";
import FormAuth from "../../components/FormAuth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../../schemas/loginSchema";
import { useState } from "react";
import axiosInstance from "../../feature/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../../feature/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const [loading, setLoading] = useState(false);
  const handleLogin = async (input) => {
    setLoading(true);
    try {
      if (input) {
        const res = await axiosInstance.post("/auth/login", input);
        if (res.request.status === 200) {
          const data = res.data.data;
          // memasukan respone login ke state
          dispatch(loginUser(data));

          setLoading(false);
          toast.success("Berhasil login");
          navigate("/", { replace: true });
        } else {
          toast.error("Gagal login");
        }
      }
    } catch (error) {
      // const resErr = error?.response?.data?.message;
      toast.error(error);
    }
    setLoading(false);
  };
  return (
    <FormAuth>
      <form
        className="flex gap-4 flex-col"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              {...field}
              variant="bordered"
              color="primary"
              label="Email"
              type="email"
              size="sm"
              isInvalid={Boolean(errors?.email)}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              {...field}
              variant="bordered"
              color="primary"
              label="Password"
              type="password"
              size="sm"
              isInvalid={Boolean(errors?.password)}
              errorMessage={errors?.password?.message}
            />
          )}
        />
        <Button color="primary" size="md" type="submit" isLoading={loading}>
          Login
        </Button>
      </form>
    </FormAuth>
  );
};

export default LoginPage;
