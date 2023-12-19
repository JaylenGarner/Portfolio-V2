"use client";

import { sendEmail } from "../lib/aws-ses";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { ImSpinner9 } from "react-icons/im";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await sendEmail({ name, email, subject, message });
      if (response) {
        setIsLoading(false);
        setIsComplete(true);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error:" + error);
    }
  };

  return (
    <>
      {!isComplete && (
        <div className="form_container">
          <h2 className="text-xl font-bold">Contact Me</h2>
          <form
            className="flex flex-col justify-center items-center w-full space-y-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="input"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input"
              required
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="input"
              required
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              className="textarea"
              required
            />

            <div className="w-full flex justify-center">
              {!isLoading ? (
                <button type="submit" className="button">
                  <IoMdSend size="32px" />
                </button>
              ) : (
                <button disabled className="loading_button animate-pulse">
                  <ImSpinner9
                    size="32px"
                    color="black"
                    className="animate-spin"
                  />
                </button>
              )}
            </div>
          </form>{" "}
        </div>
      )}

      {isComplete && <h3 className="text-xl font-bold">Message Recieved</h3>}
    </>
  );
};

export default ContactForm;
