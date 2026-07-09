function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="sp-modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="sp-modal">
        <div className="sp-modal-header">
          <h2>{title}</h2>
          <button className="sp-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="sp-modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
