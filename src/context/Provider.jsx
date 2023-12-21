import { useState } from "react";
import { Context } from "./Context";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Provider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  const [email, setEmail] = useState("");

  const schema = yup.object().shape({
    email: yup.string().required("Valid email required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    setShowPopup(true);

    return setEmail(data.email);
  };

  return (
    <Context.Provider
      value={{
        showPopup,
        setShowPopup,
        email,
        onSubmit,
        register,
        handleSubmit,
        errors,
        reset,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
