import { useContext } from "react";
import { Context } from "../context/Context";

const Form = () => {
  const { handleSubmit, onSubmit, register, errors } = useContext(Context);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="label-container">
          <label htmlFor="mail" className="label-text">
            Email adress
          </label>

          <p className="error-msg">{errors.email?.message}</p>
        </div>

        <input
          type="email"
          placeholder="email@company.com"
          id="mail"
          className={errors.email?.message ? "input-error" : "input"}
          {...register("email")}
        />
        <button type="submit" className="btn">
          Subscribe to monthly newsletters
        </button>
      </form>
    </>
  );
};

export default Form;
