import React from "react";

// style
import "./SendMail.css";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
// react-hook-form
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
// firebase
import { db } from "../../firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const dbRef = collection(db, "emails");

  const onSubmit = async (formData) => {
    await addDoc(dbRef, {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required</p>
        )}

        <input
          placeholder="Messages..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">message is required</p>
        )}

        <div className="sendMail__options">
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className="sendMail__send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
