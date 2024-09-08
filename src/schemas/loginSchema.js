import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email tidak boleh kosong")
    .email("Format email salah"),
  password: z.string().min(8, "Minimal password 8 karakter"),
});

export default loginSchema;
