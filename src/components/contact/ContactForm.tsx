import { useState, type ChangeEvent, type FormEvent } from "react";
import { profile } from "@/data/profile";

type Fields = {
  name: string;
  email: string;
  message: string;
};

const empty: Fields = { name: "", email: "", message: "" };

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

const buildMailto = ({ name, email, message }: Fields) => {
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  return `mailto:${profile.email}?subject=${subject}&body=${body}`;
};

const ContactForm = () => {
  const [fields, setFields] = useState<Fields>(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFields((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailto = buildMailto(fields);

    if (!endpoint) {
      setStatus("mailto");
      window.location.href = mailto;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setFields(empty);
      setStatus("sent");
    } catch {
      setStatus("error");
      window.location.href = mailto;
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label htmlFor="name" className="text-sm text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          value={fields.name}
          onChange={onChange}
          className="mt-1.5 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={fields.email}
          onChange={onChange}
          className="mt-1.5 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={onChange}
          className="mt-1.5 w-full resize-y rounded-md border border-border bg-transparent px-3 py-2 text-sm"
        />
      </div>

      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : endpoint ? "Send message" : "Email Hassan"}
      </button>

      <p className="text-sm leading-relaxed text-muted-foreground" role="status">
        {status === "sent"
          ? "Message sent. Hassan will reply by email."
          : status === "error"
            ? "The contact API did not accept the message, so your email app should open instead."
            : status === "mailto"
              ? "Your email app should open with this message filled in."
              : endpoint
                ? "This form posts to the contact API configured for this build."
                : "This static site does not store messages. The button opens your email app with the note filled in. You can also write directly to the address above."}
      </p>
    </form>
  );
};

export default ContactForm;
