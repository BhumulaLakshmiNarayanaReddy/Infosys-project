function Button({ children, onClick, type = 'button', variant = 'primary', disabled = false, className = '' }) {
  const variantClass = {
    primary: 'sp-btn-primary',
    secondary: 'sp-btn-secondary',
    danger: 'sp-btn-danger',
  }[variant] ?? 'sp-btn-primary';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`sp-btn ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
