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
        let item = inputs.filter((input) => {
          return input.id == el;
        });
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
      <p className="mb-6 w-large bg-purple">
        Try it Free for 7 days <span>then $20/mo.thereafter</span>
      </p>
      <form className="w-medium  p-8 bg-white rounded-md">
        <div className=" w-full border border-purple  rounded-md  h-14 flex flex-row items-center bg-white mb-2 ">
          <input
            onChange={(event) => {
              updateValue(event.target);
            }}
            className=" w-large h-13 bg-white p-2 mr-2 border-none outline-none focus:border-red-500 "
            type="text"
            id="name"
          ></input>
          <img src={warning} alt=""></img>
        </div>
        <p className="none">firstname can not be empty</p>

        <div className=" w-full border border-purple  rounded-md  h-14 flex flex-row items-center bg-white mb-2">
          <input
            onChange={(event) => {
              updateValue(event.target);
            }}
            className=" w-large h-13 bg-white p-2 mr-2 border-none outline-none"
            type="text"
            id="lastname"
          ></input>
          <img src={warning} alt=""></img>
        </div>
        <p className="none">lastname can not be empty</p>

        <div className=" w-full border border-purple  rounded-md  h-14 flex flex-row items-center bg-white mb-2">
          <input
            onChange={(event) => {
              updateValue(event.target);
            }}
            className=" w-large h-13 bg-white p-2 mr-2 border-none outline-none"
            type="email"
            id="email"
          ></input>
          <img src={warning} alt=""></img>
        </div>
        <p className="none">Looks Like this is not your email</p>

        <div className=" w-full border border-purple  rounded-md  h-14 flex flex-row items-center bg-white mb-2">
          <input
            onChange={(event) => {
              updateValue(event.target);
            }}
            className=" w-large h-13 bg-white p-2 mr-2 border-none outline-none"
            type="password"
            id="password"
          ></input>
          <img src={warning} alt=""></img>
        </div>
        <p className="none">password can not be empty</p>

        <button
          onClick={(e) => {
            e.preventDefault();
            checkAllInputs();
          }}
        >
          Click
        </button>
      </form>
    </section>
  );
};

export default Form;
