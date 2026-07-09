function TicketTable({ tickets = [], onRowClick }) {
  return (
    <div className="table-wrapper">
      <table className="ticket-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length === 0 ? (
            <tr><td colSpan="5" className="no-data">No tickets found.</td></tr>
          ) : (
            tickets.map((ticket) => (
              <tr key={ticket.id} onClick={() => onRowClick?.(ticket)}>
                <td>#{ticket.id}</td>
                <td style={{ color: 'var(--text)', fontWeight: 500 }}>{ticket.title}</td>
                <td>{ticket.category}</td>
                <td><span className={`priority-badge ${ticket.priority}`}>{ticket.priority}</span></td>
                <td><span className={`status-badge ${ticket.status}`}>{ticket.status?.replace('_', ' ')}</span></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TicketTable;
