type TInputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "password" | "email" | "number" | "date";
};
// Omit<type> : <>안에 있는 타입 빼고 받는다
const Input = (props: TInputProps) => {
  const { ...rest } = props;
  return (
    <>
      <input
        className="inter text-sm border placeholder-[#acacac] border-[#4f4f4f] py-[13.5px] px-[16] rounded-lg "
        {...rest}
      />
    </>
  );
};
export default Input;
