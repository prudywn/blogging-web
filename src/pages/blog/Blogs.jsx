import "./Blogs.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Singleblog from "../../components/singleblog/Singleblog"
export default function Single() {
  return (
    <div className="single">
        <Singleblog />
        <Sidebar />
    </div>
  )
}
