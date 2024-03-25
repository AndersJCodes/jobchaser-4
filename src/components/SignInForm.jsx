import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase-config";

function SignInForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log("Form Submitted: ", data);
    const { email, password } = data;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in: ", user);
        navigate("/SavedProfiles");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <section>
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-3xl font-bold text-gray-600 mt-2">Sign in</h1>
        <p className="mt-2">Welcome back.</p>
      </div>

      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form className="space-6" onSubmit={handleSubmit(formSubmit)}>
          <div>
            <label
              className="font-semibold text-gray-600 block mt-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="your.email@example.com"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div>
            <label
              className="font-semibold text-gray-600 block mt-4"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              placeholder="8 characters or more"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 border rounded mt-4"
            type="submit"
          >
            Log in
          </button>
          <button
            className="w-full bg-white hover:bg-gray-100 text-gray-500 font-medium py-2 px-4 border rounded mt-4"
            type=""
          >
            Forgott password?
          </button>
        </form>
        <div className="w-full text-center mt-2">
          <Link to="/signup">{`Don't have an account? Sign Up`}</Link>
        </div>
      </div>
    </section>
  );
}

export default SignInForm;
