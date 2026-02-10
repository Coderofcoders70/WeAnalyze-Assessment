import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div className="flex min-h-screen">
      {/* Sidebar  */}
      <Sidebar />

      <main className="flex flex-1 flex-col">
        {/* Header  */}
        <Header />
        {/* Status Cards  */}

        {/* Ticket Table  */}
      </main>

    </div>
  )
}

export default App
