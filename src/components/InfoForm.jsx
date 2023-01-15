const InfoForm = () => {
  return (
    <div className="flex flex-col h-full mx-auto md:px-20 py-16">
      <h1 className="block font-extrabold info__head text-2xl md:text-4xl">
        Personal info
      </h1>{" "}
      <form className="grow flex flex-col gap-2 max-w-full" action="">
        <p className="info__p text-base md:text-lg font-normal mb-10">
          Please provide your name, email address, and phone number.
        </p>
        <div className="flex flex-col justify-between">
          <label className="info__label font-medium text-sm" htmlFor="username">
            Username
          </label>{" "}
          <input
            required={true}
            className="rounded-lg py-1.5 
      focus:invalid:border-red-500 focus:invalid:ring-red-500 border border-gray-300 px-2.5 font-medium"
            type="text"
            name="username"
            placeholder={"e.g. Stephen King"}
          />
        </div>
        <br />
        <div className="flex flex-col  justify-between">
          <label
            className="info__label font-medium text-sm"
            htmlFor="useremail"
          >
            Email
          </label>
          <input
            required={true}
            className="py-1.5 rounded-lg 
      focus:invalid:border-red-500 focus:invalid:ring-red-500 border border-gray-300 px-2.5 font-medium"
            name="useremail"
            type="email"
            /*WARN: The input value is automatically validated to ensure that it's either empty
             * or a properly-formatted email address (or list of addresses) before the form can be submitted
             * MDN does not even recommend it for emails*/
            placeholder={"param.singh@fmail.com"}
            // defaultValue={"stephenking@lorem.com"}
          />
        </div>
        <br />
        <div className="flex flex-col justify-between">
          <label
            className="info__label font-medium text-sm"
            htmlFor="usernumber"
          >
            Phone Number
          </label>
          <input
            required={true}
            className="rounded-lg py-1.5 
      focus:invalid:border-red-500 focus:invalid:ring-red-500 border border-gray-300 px-2.5 font-medium"
            type="tel"
            name="usernumber"
            placeholder="e.g. +1 234 567 890"
            // defaultValue={""}
          />
        </div>
      </form>
    </div>
  );
};

export default InfoForm;
