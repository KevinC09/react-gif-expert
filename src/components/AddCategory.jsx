import { useState } from "react";
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim())
    // setcategories((cats) => [inputValue, ...cats]);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInput}
      />
    </form>
  );
};
