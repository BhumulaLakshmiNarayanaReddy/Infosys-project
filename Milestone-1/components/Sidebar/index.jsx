import { NavLink } from 'react-router-dom';

function Sidebar({ menuItems = [], brand = 'SupportPilot', onLogout }) {
  return (
    <aside className="sp-sidebar">
      <div className="sp-sidebar-header">
        <div className="sp-sidebar-logo">SP</div>
        <span className="sp-sidebar-kicker" style={{ fontSize: '1rem' }}>{brand}</span>
      </div>

      <nav className="sp-sidebar-nav">
        {menuItems.map((item) =>
          item.to ? (
            <NavLink
              key={item.id ?? item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `sp-sidebar-link${isActive ? ' active' : ''}`}
            >
              {item.icon && <span className="sp-nav-icon">{item.icon}</span>}
              <span>{item.label}</span>
            </NavLink>
          ) : (
            <button
              key={item.id ?? item.label}
              className="sp-sidebar-link"
              style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              onClick={() => item.onClick?.()}
            >
              {item.icon && <span className="sp-nav-icon">{item.icon}</span>}
              <span>{item.label}</span>
            </button>
          )
        )}
      </nav>

      {onLogout && (
        <div className="sp-sidebar-footer">
          <button className="sp-logout-btn w-100" onClick={onLogout}>
            🚪 Sign out
          </button>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
