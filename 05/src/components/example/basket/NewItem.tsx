import { useState } from "react";
import { Titem } from "../../../types/basket";

const NewItem = ({
  addInventoryItem,
}: {
  addInventoryItem: (item: Titem) => void;
}) => {
  //   const { onSubmit } = props;
  // type Titem = {
  //   name: string;
  //   quantity: number;
  //   description: string;
  //   price: number;
  // };
  // const inputHandler = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setItem((item) => ({ ...item, [e.target.name]: e.target.value }));
  // };
  const [formState, setFormState] = useState({
    name: "",
    quantity: "",
    description: "",
    price: "",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
                id="name"
                name="name"
                autoComplete="off"
                value={formState.name}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="quantity">
                Quantity
              </label>
              <input
                className="flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
                id="quantity"
                type="number"
                name="quantity"
                autoComplete="off"
                value={formState.quantity}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
              id="description"
              name="description"
              autoComplete="off"
              value={formState.description}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="price">
              Price
            </label>
            <input
              className="flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm"
              id="price"
              type="number"
              name="price"
              autoComplete="off"
              value={formState.price}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <button
            onClick={() => {
              addInventoryItem({
                name: formState.name,
                quantity: formState.quantity,
                description: formState.quantity,
                price: formState.price,
              });
              setFormState({
                name: "",
                quantity: "",
                description: "",
                price: "",
              });
            }}
          >
            Add Item
          </button>
        </form>
      </div>
    </>
  );
};
export default NewItem;
