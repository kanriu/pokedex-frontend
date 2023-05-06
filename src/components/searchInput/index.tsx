import { useEffect, useState, ChangeEvent } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";

interface Props {
  onDebounce: (value: string) => void;
}

export const SearchInput = ({ onDebounce }: Props) => {
  const [textValue, setTextValue] = useState("");
  const debounceValue = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(debounceValue);
  }, [debounceValue]);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTextValue(target.value);
  };
  return (
    <input
      value={textValue}
      onChange={onInputChange}
      className="form-control me-2 w-25"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
  );
};
