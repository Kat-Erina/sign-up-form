import { useState } from "react";
import warning from "../assets/Group 11.svg";
const Form = () => {
  const [stateObject, setStateObject] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  function updateValue(param) {
    setStateObject({ ...stateObject, [param.id]: param.value });
    if (param.value != "") {
      removeStyle(param);
    }
  }

  function applyErroStyle(param) {
    param.parentNode.classList.add("error");
    param.nextSibling.classList.add("visible");
    param.parentNode.nextSibling.classList.add("visible");
  }

  function removeStyle(param) {
    param.parentNode.classList.remove("error");
    param.nextSibling.classList.remove("visible");
    param.parentNode.nextSibling.classList.remove("visible");
  }
  function checkAllInputs() {
    let objKeys = Object.keys(stateObject);

    let inputs = Array.from(document.querySelectorAll("input"));

    // ai es qveda funqcionali ar momwons
    objKeys.forEach((el) => {
      if (stateObject[el].length === 0) {
        let item = inputs.filter((input) => input.id == el);
        applyErroStyle(item[0]);
      } else {
        let item = inputs.filter((input) => {
          return input.id == el;
        });
        removeStyle(item[0]);
      }
    });
    console.log(stateObject);
  }

  return (
    <section>
      <p className="mb-6 mx-6 px-6  bg-purple h-88 rounded-lg text-center flex justify-center items-center text-white py-4 shadow-dark md:h-60  md:text-[15px]">
        Try it Free for 7 days then $20/mo.thereafter
      </p>
      <form className="mx-6 mb-6 p-8  bg-white rounded-md shadow-dark md:p-10 ">
        <div className=" w-full border border-light-grey rounded-md  h-14 flex flex-row items-center bg-white md:h-56  md:w-full ">
          <input
            placeholder="First Name"
            onChange={(event) => {
              updateValue(event.target);
            }}
            className=" w-large h-13 bg-white p-2 mr-2 border-none outline-none  text-dark-grey font-semibold text-14 placeholder:text-placeholder placeholder:font-bold text-sm placeholder:opacity-75 md:px-6"
            type="text"
            id="name"
          ></input>
          <img src={warning} alt=""></img>
        </div>
        <p className="none w-full text-right text-pink italic text-extra-small p-1 ">
          name can not be empty
        </p>

        <div className=" w-full border border-light-grey  rounded-md  h-14 flex flex-row items-center bg-white  md:h-56 md:w-full ">
          <input
            placeholder="Last Name"
            onChange={(event) => {
              updateValue(event.target);
            }}
            className=" w-large h-13 bg-white p-2 mr-2 border-none outline-none  text-dark-grey font-semibold text-14 placeholder:text-placeholder placeholder:font-bold text-sm placeholder:opacity-75  md:text-10 md:px-6"
            type="text"
            id="lastname"
          ></input>
          <img src={warning} alt=""></img>
        </div>
        <p className=" none w-full text-right text-pink font-medium italic text-extra-small py-1">
          Lastname can not be empty
        </p>

        <div className=" w-full border border-light-grey rounded-md  h-14 flex flex-row items-center bg-white md:h-56 md:w-full ">
          <input
            placeholder="Email"
            onChange={(event) => {
              updateValue(event.target);
            }}
            className=" w-large h-13 bg-white p-2 mr-2 border-none outline-none  text-dark-grey font-semibold text-14 placeholder:text-placeholder placeholder:font-bold text-sm placeholder:opacity-75  md:text-10 md:md:px-6"
            type="email"
            id="email"
          ></input>
          <img src={warning} alt=""></img>
        </div>
        <p className="none w-full text-right float-right text-pink font-medium italic text-extra-small py-1">
          Looks like it is not your email
        </p>

        <div className=" w-full border border-light-grey  rounded-md  h-14 flex flex-row items-center bg-white  md:h-56 md:w-full ">
          <input
            placeholder="Password"
            onChange={(event) => {
              updateValue(event.target);
            }}
            className=" w-large h-13 bg-white p-2 mr-2 border-none outline-none  text-dark-grey font-semibold text-14 placeholder:text-placeholder placeholder:font-bold text-sm placeholder:opacity-75  md:text-10 md:px-6"
            type="password"
            id="password"
          ></input>
          <img src={warning} alt=""></img>
        </div>
        <p className="none w-full text-right float-right text-pink font-medium italic text-extra-small py-1">
          Password can not be empty
        </p>

        <button
          className="text-white  flex items-center justify-center text-base py-[15px] px-[45px] w-full bg-green rounded-5 shadow-light md:h-56 text-15"
          onClick={(e) => {
            e.preventDefault();
            checkAllInputs();
          }}
        >
          Claim Your Free Trial
        </button>
        <p className="mt-5 text-grey v md:text-extra-small text-center ">
          By clicking the button you are agreeing to our{" "}
          <b className="text-pink">Terms and Services</b>
        </p>
      </form>
    </section>
  );
};

export default Form;
