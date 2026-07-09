function Navbar({ title = 'AI Ticket Management System', userName = 'User', children }) {
  return (
    <header className="sp-navbar">
      <span className="sp-navbar-title">{title}</span>
      <div className="sp-navbar-right">
        {children}
        <div className="sp-user-chip">
          <div className="sp-user-avatar">{userName?.[0]?.toUpperCase() ?? 'U'}</div>
          <span>{userName}</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
