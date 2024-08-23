import { useState } from "react";

type UseCheckboxReturnType = [boolean, () => void, () => void];

function useCheckbox(initialValue: boolean): UseCheckboxReturnType {
  const [checked, setChecked] = useState(initialValue);
  const onChangeCheckbox = () => {
    setChecked((checked) => !checked);
  };
  const reset = () => setChecked(false);
  return [checked, onChangeCheckbox, reset];
}

export default useCheckbox;
