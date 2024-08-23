import { useState } from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Input from "./Input";
import useCheckbox from "../../hooks/useCheckbox";
import useReset from "../../hooks/useReset";

const LoginComponent = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isSign, setIsSign] = useState(false);
  const [checked, onChangeCheckbox, resetChecked] = useCheckbox(false);
  const resetAll = useReset(resetChecked);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.email || !user.password || !checked) {
      alert("Please fill all the fields.");
      return;
    }
    if (isSign) {
      if (!user.name) alert("Please fill all the fields.");
      else {
        alert("Signup Successfully");
      }
      return;
    }
    alert("Login Successfully");
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }));

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">
            {isSign ? "Sign Into App" : "Login Into App"}
          </h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form action="" className="grid gap-4" onSubmit={submitHandler}>
            {isSign && (
              <Input
                type="text"
                placeholder="Enter Your Name"
                value={user.name}
                name="name"
                onChange={onChangeHandler}
              />
            )}
            <Input
              type="text"
              placeholder="someone@example.com"
              value={user.email}
              name="email"
              onChange={onChangeHandler}
            />
            <Input
              type="password"
              placeholder="Enter Password"
              value={user.password}
              name="password"
              onChange={onChangeHandler}
            />
            <CheckBox
              type="checkbox"
              checked={checked}
              onChange={onChangeCheckbox}
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </CheckBox>
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
              >
                {isSign ? "Sign In" : "Log In"}
              </Button>
              <Button
                type="button"
                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
                onClick={() => {
                  setIsSign((isSign) => !isSign);
                  // resetChecked();
                  setUser({ email: "", password: "", name: "" });
                  resetAll();
                }}
              >
                {isSign ? "Go To Log In" : "Go To Sing up"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginComponent;
