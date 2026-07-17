"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";

const fieldClass =
  "mt-2 min-h-12 w-full rounded-sm border border-[var(--color-line)] bg-white px-4 text-sm text-[var(--color-ink)] outline-none transition-colors placeholder:text-black/30 focus:border-[var(--color-brand)]";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = (name: string) => String(formData.get(name) || "").trim();
    const attachment = formData.get("attachment");
    const attachmentName = attachment instanceof File && attachment.name ? attachment.name : "None";
    const subject = `ZH PACK RFQ - ${value("company") || value("name")}`;
    const body = [
      `Name: ${value("name")}`,
      `Company: ${value("company")}`,
      `Email: ${value("email")}`,
      `Country: ${value("country")}`,
      `Quantity: ${value("quantity") || "Not specified"}`,
      `Selected file: ${attachmentName}`,
      "",
      "Product requirement:",
      value("requirement"),
      "",
      attachmentName !== "None" ? "Please attach the selected file to this email before sending." : "",
    ]
      .filter(Boolean)
      .join("\n");

    setStatus(
      `Your email application should open with the inquiry prepared for ${siteConfig.email}. Please review it and attach any selected file before sending.`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6" encType="multipart/form-data">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Name <span className="text-[var(--color-brand)]">*</span>
          <input className={fieldClass} type="text" name="name" autoComplete="name" required />
        </label>
        <label className="text-sm font-semibold">
          Company <span className="text-[var(--color-brand)]">*</span>
          <input
            className={fieldClass}
            type="text"
            name="company"
            autoComplete="organization"
            required
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Email <span className="text-[var(--color-brand)]">*</span>
          <input
            className={fieldClass}
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            required
          />
        </label>
        <label className="text-sm font-semibold">
          Country <span className="text-[var(--color-brand)]">*</span>
          <input
            className={fieldClass}
            type="text"
            name="country"
            autoComplete="country-name"
            required
          />
        </label>
      </div>

      <label className="text-sm font-semibold">
        Product Requirement <span className="text-[var(--color-brand)]">*</span>
        <textarea
          className={`${fieldClass} min-h-40 resize-y py-3`}
          name="requirement"
          placeholder="Product, dimensions, material, application, or protection requirements"
          required
        />
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Quantity
          <input
            className={fieldClass}
            type="text"
            name="quantity"
            inputMode="numeric"
            placeholder="Estimated order quantity"
          />
        </label>
        <label className="text-sm font-semibold">
          Upload File
          <input
            className="mt-2 min-h-12 w-full cursor-pointer rounded-sm border border-dashed border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2 text-xs file:mr-3 file:rounded-sm file:border-0 file:bg-[var(--color-ink)] file:px-3 file:py-2 file:text-xs file:font-bold file:text-white"
            type="file"
            name="attachment"
            accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png,.zip"
          />
        </label>
      </div>

      <div className="border-t border-[var(--color-line)] pt-6">
        <button
          type="submit"
          className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-sm bg-[var(--color-brand)] px-7 text-sm font-bold text-white transition-colors hover:bg-[var(--color-brand-dark)] sm:w-auto"
        >
          Request Quote <span aria-hidden="true">↗</span>
        </button>
        <p className="mt-4 text-xs leading-5 text-[var(--color-muted)]">
          The button prepares an email to {siteConfig.email}. Uploaded files must be attached
          in your email application before sending.
        </p>
        {status ? (
          <p
            role="status"
            aria-live="polite"
            className="mt-5 border-l-2 border-[var(--color-brand)] bg-[var(--color-surface)] p-4 text-sm leading-6 text-[var(--color-muted)]"
          >
            {status}
          </p>
        ) : null}
      </div>
    </form>
  );
}
