import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

function SignUpForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log("Form Submitted: ", data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        // Redirect to a new page after successful form submission
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <section>
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-3xl font-bold text-gray-600 mt-2">Sign up</h1>
        <p className="mt-2">
          Signing up means you can save relevant candidates and keep track of
          the people you contacted.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="max-w-md w-full mx-auto mt-4"
      >
        <div className="bg-white p-8 border border-gray-300">
          <div className="space-6">
            <div>
              <label
                htmlFor="email"
                className="font-semibold text-gray-600 block mt-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
              <label
                htmlFor="password"
                className="font-semibold text-gray-600 block mt-4"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="font-semibold text-gray-600 block mt-4"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 border rounded mt-4"
            >
              Register
            </button>
            <Link
              to="/signin"
              className="w-full bg-white hover:bg-gray-100 text-gray-500 font-medium py-2 px-4 border rounded mt-4 block text-center"
            >
              Already have an account? Sign In.
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;

/* import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

function SignUpForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log("Form Submitted: ", data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        // Redirect to a new page after successful form submission
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>

      <button type="submit">Register</button>
      <Link to="/signin">Already have an account? Sign In</Link>
    </form>
  );
}

export default SignUpForm; */
