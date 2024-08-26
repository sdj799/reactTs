import { useState } from "react";
import { Titem } from "../../../types/basket";
import NewItem from "./NewItem";
import ItemList from "./ItemList";

const Basket = () => {
  const [items, setItems] = useState<Titem[]>([]);

  const addInventoryItem = (item: Titem) => {
    setItems((items) => [...items, item]);
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-500">
        <div className="flex gap-4">
          <NewItem addInventoryItem={(item) => addInventoryItem(item)} />
          <ItemList items={items} />
          {/* <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Add New Item</h2>
            <form className="grid gap-4" onSubmit={(e) => e.preventDefault}>
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
                type="button"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#f0f0f0] hover:bg-primary/90 h-10 px-4 py-2"
                onClick={() =>
                  addInventoryItem({
                    name: formState.name,
                    quantity: formState.quantity,
                    description: formState.quantity,
                    price: formState.price,
                  })
                }
              >
                Add Item
              </button>
            </form>
          </div> */}
          {/* <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Current Inventory</h2>
            <div className="mb-4">
              <input
                className="flex h-10 rounded-md border bg-background px-3 py-2 text-sm w-full"
                placeholder="Search inventory..."
                type="search"
                autoComplete="off"
              />
            </div>
            <div className="overflow-auto">
              <div className="relative w-full overflow-scroll max-h-[280px]">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 font-medium cursor-pointer">
                        Name
                      </th>
                      <th className="h-12 px-4 font-medium cursor-pointer">
                        Description
                      </th>
                      <th className="h-12 px-4 font-medium cursor-pointer">
                        Quantity
                      </th>
                      <th className="h-12 px-4 font-medium cursor-pointer">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => {
                      return (
                        <tr className="border-b">
                          <td className="p-4 font-medium">{item.name}</td>
                          <td className="p-4">{item.description}</td>
                          <td className="p-4 text-right">{item.quantity}</td>
                          <td className="p-4 text-right">{item.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Basket;
