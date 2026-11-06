import { useRef } from "react";
import type { FormEvent } from "react";

export default function NewsletterForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = new FormData(event.currentTarget).get("email");
    const email = typeof value === "string" ? value.trim() : "";

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      inputRef.current?.setCustomValidity("Podaj poprawny adres e-mail.");
      inputRef.current?.setAttribute("aria-invalid", "true");
      inputRef.current?.focus();
      inputRef.current?.reportValidity();
      return;
    }

    inputRef.current?.setCustomValidity("");
    inputRef.current?.removeAttribute("aria-invalid");
    event.currentTarget.reset();
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="newsletter-email">Adres e-mail</label>
        <input
          ref={inputRef}
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          onInput={() => {
            inputRef.current?.setCustomValidity("");
            inputRef.current?.removeAttribute("aria-invalid");
          }}
        />
      </div>
      <button type="submit" className="primary">Zapisz się</button>
    </form>
  );
}