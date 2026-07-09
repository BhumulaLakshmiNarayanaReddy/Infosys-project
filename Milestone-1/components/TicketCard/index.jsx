function TicketCard({ title, category, priority, status, assignedTo, createdAt, onClick }) {
  return (
    <div className="sp-ticket-card" onClick={onClick}>
      <div className="sp-ticket-card-meta">
        <span className={`priority-badge ${priority}`}>{priority}</span>
        <span className={`status-badge ${status}`}>{status?.replace('_', ' ')}</span>
      </div>
      <h3>{title}</h3>
      {category && <p>📁 {category}</p>}
      {assignedTo && <p>👤 {assignedTo}</p>}
      {createdAt && <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
        {new Date(createdAt).toLocaleDateString()}
      </p>}
    </div>
  );
}

export default TicketCard;
