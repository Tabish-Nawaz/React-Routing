import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "Tabish Nawaz",
      email: "tabishnawaz311@gmail.com",
      age: 18,
      social: {
        facebook: "",
        twitter: "",
      },
    },
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          User Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>

            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
                validate: {
                  notAdminEmail: (value) =>
                    value !== "admin@example.com" || "Use a different email",

                  notBlacklistedEmail: (value) =>
                    !value.endsWith("@blacklist.com") ||
                    "This domain is not allowed",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Age
            </label>

            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                valueAsNumber: true,
                min: {
                  value: 18,
                  message: "Minimum age is 18",
                },
                max: {
                  value: 25,
                  message: "Maximum age is 25",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.age && (
              <p className="text-red-500 text-sm mt-1">
                {errors.age.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* React Hook Form DevTool */}

    </div>
  );
}

export default Contact;