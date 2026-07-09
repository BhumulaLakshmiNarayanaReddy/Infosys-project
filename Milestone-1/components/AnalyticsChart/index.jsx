function AnalyticsChart({ title = 'Analytics', data = [] }) {
  const max = Math.max(...data.map(d => d.value ?? 0), 1);

  return (
    <div className="sp-analytics-chart">
      <h2>{title}</h2>
      {data.length === 0 ? (
        <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem' }}>No data available.</p>
      ) : (
        <ul>
          {data.map((item, i) => (
            <li key={i}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.07)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${Math.round((item.value / max) * 100)}%`,
                    background: 'linear-gradient(90deg, var(--accent), var(--cyan))',
                    borderRadius: '999px',
                    transition: 'width 0.6s ease',
                  }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AnalyticsChart;
