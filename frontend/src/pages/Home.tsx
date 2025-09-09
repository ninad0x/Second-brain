import { Dashboard2 } from "../components/Dashboard/Dashboard";
import { Sidebar } from "../components/Sidebar/Sidebar";



export default function Home() {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr]">
      <Sidebar />
      <Dashboard2 />
    </div>
  )

}