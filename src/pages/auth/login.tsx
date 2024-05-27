import { Logo } from "@/components/Logo";
import { Button, TextField } from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <form className="flex flex-col gap-3 items-center justify-center h-full">
      <div className="mb-3">
        <Logo />
      </div>
      <TextField label="Email" />
      <TextField label="Password" />
      <span>
        Don{"'"}t have an account?{" "}
        <Link href="/auth/signup" className="underline">
          Sign up
        </Link>
      </span>
      <Button variant="contained" className="w-full">
        Login
      </Button>
    </form>
  );
}
