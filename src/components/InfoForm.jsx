const InfoForm = () => {
  return (
    <div>
      <h1>Personal info</h1>{" "}
      <p>Please provide your name, email address, and phone number.</p>
      <label htmlFor="username"></label>
      <input type="text" name="username" defaultValue={"e.g. Stephen King"} />
      <label htmlFor="useremail"></label>
      <input
        name="useremail"
        type="text"
        defaultValue={"e.g. stephenking@lorem.com"}
      />
      <label htmlFor="usernumber"></label>
      <input
        type="text"
        name="usernumber"
        defaultValue={"e.g. +1 234 567 890"}
      />
      Email Address Phone Number Next Step
    </div>
  );
};

export default InfoForm;
