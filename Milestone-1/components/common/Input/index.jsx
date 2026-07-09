function Input({ label, type = 'text', name, value, placeholder, onChange, required = false, disabled = false, error = '' }) {
  return (
    <div className="sp-input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      {error && <small>{error}</small>}
    </div>
  );
}

export default Input;
