const Option = ({ onSelect, selected, children }) => {
  return (
    <div
      className={`hover:border-indigo-600 flex py-5 gap-2 justify-start rounded-xl border ${
        selected && " border-indigo-800"
      }`}
      onClick={onSelect}
    >
      {children}
    </div>
  );
};

export default Option;
