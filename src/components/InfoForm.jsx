const InfoForm = () => {
  return (
    <div className="mx-auto">
      <h1 className="block font-extrabold text-4xl">Personal info</h1>{" "}
      <form className="flex-col max-w-lg" action="">
        <p>Please provide your name, email address, and phone number.</p>
        <div className="flex flex-col md:flex-row justify-between md:gap-10 ">
          <label htmlFor="username">Username</label>{" "}
          <input
            required={true}
            className="rounded-lg invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500 border border-gray-300 px-2 text-center"
            type="text"
            name="username"
            defaultValue={"e.g. Stephen King"}
          />
        </div>
        <br />
        <div className="flex flex-col md:flex-row justify-between md:gap-10">
          <label htmlFor="useremail">Email</label>
          <input
            required={true}
            className="rounded-lg invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500 border border-gray-300 px-2 text-center"
            name="useremail"
            type="email"
            defaultValue={"e.g. stephenking@lorem.com"}
          />
        </div>
        <br />
        <div className="flex flex-col md:flex-row justify-between md:gap-10">
          <label htmlFor="usernumber">Phone Number</label>
          <input
            required={true}
            className="rounded-lg invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500 border border-gray-300 px-2 text-center"
            type="tel"
            name="usernumber"
            defaultValue={"e.g. +1 234 567 890"}
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default InfoForm;
