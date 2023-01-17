import { useState } from "react";

const InfoForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async function (evt) {
    evt.preventDefault();
    console.log("Submitting Form ", evt.target);
    props.onGoNext();
  };

  return (
    <div className="flex flex-col h-full mx-auto px-10 md:px-20 py-16">
      <h1 className="block font-extrabold info__head text-2xl md:text-4xl">
        Personal info
      </h1>{" "}
      <form
        className="grow flex flex-col gap-2 max-w-full"
        onSubmit={handleSubmit}
      >
        <p className="info__p text-base md:text-lg font-normal mb-10">
          Please provide your name, email address, and phone number.
        </p>
        <div className="flex flex-col justify-between">
          <label className="info__label font-medium text-sm" htmlFor="username">
            Username
          </label>{" "}
          <input
            required={true}
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
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
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
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
            value={number}
            onChange={(evt) => setNumber(evt.target.value)}
            className="rounded-lg py-1.5 
      focus:invalid:border-red-500 focus:invalid:ring-red-500 border border-gray-300 px-2.5 font-medium"
            type="tel"
            name="usernumber"
            placeholder="e.g. +1 234 567 890"
            // defaultValue={""}
          />
        </div>
        <button
          //NOTE: Setting an element to absolute changes its containing block to be the closest
          //      ancestor with position !== static (which is the default)
          //      Furthemore, remember that absolute positioned elements
          //      consider the padding box as the containing block not the content-box
          //HACK: Very important to understarnd the mt-auto
          //NOTE
          className="absolute -bottom-72 right-5 md:right-10 md:bottom-5 z-10 ml-auto md:mr-20 py-2 rounded-md px-4 border bg-blue-900 text-white font-medium text-base"
          type="submit"
          // onSubmit={handleSubmit}
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default InfoForm;
