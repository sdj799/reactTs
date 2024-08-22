// import { MdDeleteForever } from "react-icons/md";
import Button from "./Button";
import Input from "./Input";
import CheckBox from "./CheckBox";

export default function App() {
  return (
    <>
      <div className="item-middle flex-col gap-4">
        <Button
          type="button"
          className="bg-[#4F4F4F]"
          name="add-btn"
          disabled={true}
        >
          {/* <MdDeleteForever /> */}
          Add
        </Button>
        <Button
          type="button"
          className="bg-[#ED4848]"
          name="cancle-btn"
          disabled={true}
        >
          Cancle
        </Button>
        <Button
          type="button"
          className="bg-[#7D48ED]"
          name="success-btn"
          disabled={true}
        >
          Success
        </Button>
        <Input type="text" placeholder="Enter Todo List"></Input>
        <div className="flex items-center gap-2">
          <Input type="text" placeholder="Enter Todo List"></Input>
          <Button
            type="button"
            className="bg-[#4F4F4F]"
            name="add-btn"
            disabled={true}
          >
            Add
          </Button>
        </div>
        <CheckBox type="checkbox">
          I gree with <strong>pterms</strong> and <strong>policies</strong>.
        </CheckBox>
      </div>
    </>
  );
}
