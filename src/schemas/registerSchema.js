import { z } from "zod";
const registerSchema = z.object({
  name: z
    .string()
    .min(1, "Nama harus diisi")
    .max(50, "Nama tidak boleh lebih dari 50 karakter"), // Batas panjang nama
  email: z
    .string()
    .nonempty("Email tidak boleh kosong")
    .email("Format email salah"),
  password: z.string().min(8, "Minimal password 8 karakter"),
  // .regex(/[A-Z]/, "Password harus mengandung huruf kapital") // Huruf kapital
  // .regex(/[a-z]/, "Password harus mengandung huruf kecil") // Huruf kecil
  // .regex(/[0-9]/, "Password harus mengandung angka") // Angka
  // .regex(/[\W_]/, "Password harus mengandung karakter khusus") // Karakter khusus
});

export default registerSchema;
