function NotificationBell({ count = 0, onClick }) {
  return (
    <button className="sp-notif-btn" onClick={onClick} aria-label={`Notifications${count > 0 ? ` (${count})` : ''}`}>
      🔔
      {count > 0 && <span className="sp-notif-badge">{count > 99 ? '99+' : count}</span>}
    </button>
  );
}

export default NotificationBell;
