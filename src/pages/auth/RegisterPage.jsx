import { Button, Input } from "@nextui-org/react";
import FormAuth from "../../components/FormAuth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "../../schemas/registerSchema";
import axiosInstance from "../../feature/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../feature/userSlice";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      if (data) {
        const res = await axiosInstance.post("/auth/register", data);
        if (res.status === 201) {
          const data = res.data.data;
          // memasukan respone login ke state
          dispatch(registerUser(data));

          setLoading(false);
          toast.success("Berhasil login");
          navigate("/", { replace: true });
        } else {
          toast.error("Terjadi kesalahan...");
        }
      }
    } catch (error) {
      // Mengecek kesalahan yang datang dari server
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message || "Terjadi kesalahan";

        // Menangani kesalahan spesifik: duplicate key error
        if (errorMessage.includes("duplicate key error collection")) {
          toast.error(
            "Pengguna sudah ada. Silakan gunakan email atau nama pengguna yang lain."
          );
        } else {
          // Menangani kesalahan lain
          toast.error(errorMessage);
        }
      } else {
        // Menangani kesalahan yang tidak terduga
        toast.error("Terjadi kesalahan pada server.");
      }
    }
    setLoading(false);
  };
  return (
    <FormAuth isRegister={true}>
      <form
        className="flex gap-4 flex-col"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              {...field}
              variant="bordered"
              color="primary"
              label="Nama"
              size="sm"
              isInvalid={Boolean(errors?.name)}
              errorMessage={errors.name?.message}
            />
          )}
        />
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
        <Button color="primary" size="md" type="submit">
          Login
        </Button>
      </form>
    </FormAuth>
  );
};
export default RegisterPage;
