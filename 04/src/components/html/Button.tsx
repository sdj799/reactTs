import { twMerge } from "tailwind-merge";

// type sm = {
//   type: "button" | "submit" | "reset";
//   children: React.ReactNode;
//   className: string;
//   disabled: boolean;
//   name: string;
// };
type TButtonProps = React.ComponentPropsWithoutRef<"button">;
const Button = (props: TButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <>
      <button
        {...rest}
        className={twMerge(
          "w-[77px] h-[44px] text-white text-[14px] font-medium rounded-lg",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
