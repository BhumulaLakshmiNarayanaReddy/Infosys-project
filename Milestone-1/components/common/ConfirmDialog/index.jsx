function ConfirmDialog({ isOpen, title = 'Confirm', message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="sp-confirm-backdrop" onClick={(e) => e.target === e.currentTarget && onCancel()}>
      <div className="sp-confirm">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="sp-confirm-actions">
          <button className="sp-btn sp-btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="sp-btn sp-btn-danger" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
