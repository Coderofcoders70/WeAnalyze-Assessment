
function Sidebar() {
  const menuItems = [
    { label: 'Dashboard', active: true },
    { label: 'Tickets', active: false },
  ];

  return (
    <aside>
      <div>
        <h1 className="text-4xl">WeAnalyze</h1>
      </div>
      <div>
        {menuItems.map((item) => item.label)}
      </div>
    </aside>
  )
}

function App() {

  return (
    <>
      <Sidebar />
    </>
  )
}

export default App
