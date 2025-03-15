"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"; // Ensure this import is correct

const Input = ({
  label,
  type = "text",
  error,
  disabled,
  ...props
}: {
  label: string;
  type?: string;
  error?: string;
  disabled?: boolean;
}) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type={type}
      disabled={disabled}
      className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        disabled ? "bg-gray-100 cursor-not-allowed" : ""
      }`}
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const schema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(""); // Clear previous errors
    try {
      await axios.post("http://localhost:3001/users", data); // Removed `response` assignment
      setSuccess("Signup successful!");
      reset(); // Clear form fields after successful submission
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message || "An error occurred during signup."
        );
      } else {
        setError("An unexpected error occurred.");
      }
    }
    setLoading(false);
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      {success && <p className="text-green-600 text-center">{success}</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Name"
          {...register("name")}
          error={errors.name?.message}
          disabled={loading}
        />
        <Input
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          disabled={loading}
        />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
          disabled={loading}
        />
        <Input
          label="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
          disabled={loading}
        />

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
}
