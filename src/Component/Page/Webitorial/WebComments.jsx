import React, { useState } from "react";
import Btn from "../../Common/Btn";
import axios from "axios";
import { useParams } from "react-router-dom";

const WebComments = () => {
  const { WebitorialId } = useParams();
  const [values, setValues] = useState({
    WebitorialId: WebitorialId,
    email: '',
    username: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    if (!values.username.trim()) {
      newErrors.username = "Name is required";
    }
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!values.message.trim()) {
      newErrors.message = "Comment is required";
    }

    // If there are validation errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post('https://worldmodelhunt.com/api/webitorial/addcomment', values);
      console.log('Message successfully sent');

      // Reset the form after successful submission
      setValues({
        email: '',
        username: '',
        message: '',
      });
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="flex flex-col mb-4 w-1/2">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={values.username}
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
              className={`border p-2 outline-none ${
                errors.username && "border-red-500"
              }`}
            />
            <p className="text-purple text-sm">{errors.username}</p>
          </div>
          <div className="flex flex-col mb-4 w-1/2">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
              className={`border p-2 outline-none ${
                errors.email && "border-red-500"
              }`}
            />
            <p className="text-purple text-sm">{errors.email}</p>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="comment" className="mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            placeholder="message..."
            value={values.message}
            onChange={(e) =>
              setValues({ ...values, message: e.target.value })
            }
            className={`border p-2 outline-none ${
              errors.message && "border-red-500"
            }`}
          ></textarea>
          <p className="text-purple text-sm">{errors.message}</p>
        </div>
        <Btn btname="Post" />
      </form>
    </>
  );
};

export default WebComments;
