import thankYou from "../../assets/images/icon-thank-you.svg";

const Finish = () => {
  return (
    <div className="flex h-full justify-center py-20 mx-auto w-full max-w-xl text-center">
      <div className="my-auto w-5/6">
        <img className="mx-auto" src={thankYou} alt="round checkmark icon " />
        <h1 className="info__head mt-10 font-extrabold text-2xl md:text-4xl">
          Thank you!
        </h1>
        <p className="pt-4 info__p">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>{" "}
      </div>
    </div>
  );
};

export default Finish;
