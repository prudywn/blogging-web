import "./Header.css"

export default function Header() {
  return (
    <div className="header">
       <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">blog</span>
       </div>
       <img className="headerImg"  src="https://images.pexels.com/photos/9716828/pexels-photo-9716828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

