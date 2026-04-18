import React from "react";

const stats = [
  { title: "Total Centers", value: 576 },
  { title: "Clear", value: 332 },
  { title: "Suspicious", value: 232 },
  { title: "Electricity", value: 394 },
  { title: "Seating Adeq.", value: 344 },
  { title: "Drinking Water", value: 519 },
];

const reports = [
  {
    name: "Govt Girls Higher Secondary School No.1 Kohat (A) Hall",
    status: "Suspicious",
    cctv: "5/5",
    invigilators: 9,
    participants: 255,
  },
  {
    name: "Govt Girls High School No.2 Kohat",
    status: "Suspicious",
    cctv: "3/3",
    invigilators: 9,
    participants: 225,
  },
  {
    name: "Govt Girls Centennial Model School Kohat",
    status: "Clear",
    cctv: "3/3",
    invigilators: 6,
    participants: 195,
  },
];

export default function Dashboard() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-avatar">C</div>
          <div>
            <p className="brand-label">CEMD</p>
            <h1 className="brand-title">Command Center</h1>
          </div>
        </div>

        <nav className="nav-list">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Supervisory Staff</button>
          <button className="nav-item">Centers</button>
          <button className="nav-item">Monitoring</button>
          <button className="nav-item">Settings</button>
        </nav>

        <div className="sidebar-card">
          <p className="sidebar-card-title">System status</p>
          <p className="sidebar-card-text">All inspections are on schedule, and live data is refreshed every 60 seconds.</p>
        </div>
      </aside>

      <main className="content-area">
        <header className="page-header">
          <div>
            <p className="eyebrow">Monitoring overview</p>
            <h2>Live inspection activity</h2>
            <p className="header-copy">Keep an eye on center readiness, CCTV coverage, and staff availability with real-time insights.</p>
          </div>

          <div className="header-actions">
            <button className="button button-secondary">Export</button>
            <button className="button button-primary">Filter reports</button>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.title} className="stat-card">
              <div className="stat-card-top">
                <span className="stat-title">{stat.title}</span>
                <span className="stat-pill">Live</span>
              </div>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-note">Updated moments ago</p>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="insight-card">
            <div className="insight-card-header">
              <div>
                <p className="eyebrow">Inspection readiness</p>
                <h3>Key operational metrics</h3>
              </div>
              <span className="spark-pill">92% uptime</span>
            </div>

            <div className="progress-list">
              <div className="progress-item">
                <div className="progress-label-row">
                  <span>CCTV coverage</span>
                  <span>92%</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: '92%' }} /></div>
              </div>
              <div className="progress-item">
                <div className="progress-label-row">
                  <span>Staff deployment</span>
                  <span>86%</span>
                </div>
                <div className="progress-bar"><div className="progress-fill accent" style={{ width: '86%' }} /></div>
              </div>
              <div className="progress-item">
                <div className="progress-label-row">
                  <span>Water supply</span>
                  <span>97%</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: '97%' }} /></div>
              </div>
            </div>
          </article>

          <article className="reports-section">
            <div className="section-header">
              <div>
                <p className="eyebrow">Live Inspection Reports</p>
                <h2>Recent center updates</h2>
              </div>
              <span className="status-pill">3 alerts</span>
            </div>

            <div className="reports-list">
              {reports.map((report) => (
                <article key={report.name} className="report-card">
                  <div className="report-top">
                    <div>
                      <h3>{report.name}</h3>
                      <p className="report-meta">CCTV: {report.cctv}</p>
                    </div>
                    <span className={`badge ${report.status === 'Suspicious' ? 'badge-danger' : 'badge-success'}`}>
                      {report.status}
                    </span>
                  </div>

                  <div className="report-stats">
                    <span>Invigilators: {report.invigilators}</span>
                    <span>Participants: {report.participants}</span>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
