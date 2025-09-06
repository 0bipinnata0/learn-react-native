
interface ItemT<T> {
  label: string;
  value: T;
}

export const useCheckGroupValue = <T>(init: {
  val: Array<ItemT<T>>;
  setVal: React.Dispatch<React.SetStateAction<Array<ItemT<T>>>>;
}) => {
  const { val, setVal } = init;
  return {
    checkedItems: val,
    setCheckedItems: setVal,
  };
};
