import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="bg-gray-100 p-10 rounded-lg md:w-7xl shadow-lg  mx-auto mt-6 mb-7">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-left mb-2 text-sm font-semibold">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>

          <div>
            <label className=" block text-left mb-2 text-sm font-semibold">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-left mb-2 text-sm font-semibold">Phone</label>
          <input
            {...register("phone", { required: "Phone is required" })}
            type="tel"
            placeholder="Enter your phone number"
            className="input input-bordered w-full"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-left mb-2 text-sm font-semibold">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows="4"
            placeholder="Write your message here"
            className="textarea textarea-bordered w-full"
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
        </div>

        {/* reCAPTCHA */}
        <div>
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={(value) => setValue("captcha", value)}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn bg-yellow-700 text-white w-full">
          Send Message ✈️
        </button>
      </form>
    </div>
  );
};

export default Form;
