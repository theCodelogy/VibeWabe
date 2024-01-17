export default function DashboardLayout({ children }) {
    return (
      <div>
        <h1>Dashboard Header</h1>
            {children}
        <h1>Dashboard Footre</h1>
      </div>
    )
  }