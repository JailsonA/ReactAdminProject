
function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div >
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} onChange={handleOnChange} value={value || ''} className="form-control custom-select">
        <option selected="" disabled="">Selecione uma opção</option>
        {options.map((options) => (
          <option value={options.id} key={options.id}>
            {options.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;


