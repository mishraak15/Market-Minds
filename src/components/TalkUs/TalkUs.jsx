import { useEffect, useRef } from "react";
import "./TalkUs.css";

export default function TalkUs({ setShowContact }) {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowContact(false);
      document.body.style.overflow = "visible";
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="TalkUs">
      <form
        action="https://getform.io/f/aejyjgeb"
        method="POST"
        ref={ref}
      >
        <span>Talk to us</span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Working email*"
          required
        />
        <div className="TalkUS-name-container">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name*"
            required
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name*"
            required
          />
        </div>

        <div className="checkbox-container">
          <input type="checkbox" name="terms" id="terms" required />
          <p>
            I agree to Fyle&apos;s terms and conditions, and provide consent to
            send me communication.
          </p>
        </div>

        <button type="submit">Contact Us</button>
      </form>
    </div>
  );
}
