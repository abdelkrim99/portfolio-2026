import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";

import doneAnimation from "../../assets/animation/done.json";

import Section from "../Section/Section";
import Reveal from "../Reveal/Reveal";
import { contact } from "../../data/contact";
import { profile } from "../../data/profile";

const field =
  "w-full rounded-xl border border-line bg-canvas px-4 py-3 placeholder:text-muted/70 transition-colors hover:border-ink focus:border-link focus:outline-none";

export default function Contact() {
  const [state, handleSubmit] = useForm(contact.formspreeId);
  const { email, message } = contact.fields;

  return (
    <Section id="contact" title={contact.title} description={contact.description} tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal as="ul" className="space-y-5">
          {profile.contactInfo.map((item) => (
            <li key={item.text} className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-canvas text-lg">
                <span className={item.icon} aria-hidden="true" />
              </span>
              {item.href ? (
                <a href={item.href} className="font-medium underline-offset-4 hover:underline">
                  {item.text}
                </a>
              ) : (
                <span className="font-medium">{item.text}</span>
              )}
            </li>
          ))}
        </Reveal>

        <Reveal as="form" delay={120} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              {email.label}
            </label>
            <input required type="email" name="email" id="email" placeholder={email.placeholder} className={field} />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 block text-sm text-red-500" />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              {message.label}
            </label>
            <textarea
              required
              name="message"
              id="message"
              rows={5}
              placeholder={message.placeholder}
              className={`${field} resize-y`}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 block text-sm text-red-500" />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={state.submitting}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
            >
              {state.submitting ? contact.button.sending : contact.button.idle}
            </button>

            {state.succeeded && (
              <p role="status" className="flex items-center gap-2 text-sm font-medium">
                <Lottie animationData={doneAnimation} loop={false} style={{ height: 32, width: 32 }} />
                {contact.success}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
