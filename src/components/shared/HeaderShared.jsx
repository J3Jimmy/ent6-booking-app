import { Link } from "react-router-dom"

const HeaderShared = () => {
  return (
    <header>
    <div>
      <h1>BookingApp</h1>
      <nav>
        <ul>
          <li><Link to='reservations'>Reservations</Link></li>
          <li><Link to='register'>Register</Link></li>
          <li><Link to='login'>Login</Link></li>
        </ul>
      </nav>
    </div>
    </header>
  )
}

export default HeaderShared
