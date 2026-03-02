"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "aK3_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function authenticate(formData: FormData) {
  const password = formData.get("password") as string;
  const correct = process.env.HIDDEN_PAGE_PASSWORD;

  if (!correct || password !== correct) {
    redirect("/aK3mNp9xQwR7TvL4sYzB8j?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: COOKIE_MAX_AGE,
    path: "/aK3mNp9xQwR7TvL4sYzB8j",
  });

  redirect("/aK3mNp9xQwR7TvL4sYzB8j");
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === "1";
}
