"use server";

import { createClient } from "@/lib/supabase/server";

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactInquiry(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const serviceInterest = String(formData.get("service_interest") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in name, email, and message." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_inquiries").insert({
    name,
    email,
    company: company || null,
    service_interest: serviceInterest || null,
    message,
  });

  if (error) {
    console.error("Contact inquiry failed:", error.message);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }

  return {
    success: true,
    message: "Thanks — we received your message and will get back to you soon.",
  };
}
