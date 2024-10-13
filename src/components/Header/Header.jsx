import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Logo, LogoutBtn } from '../index'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status)
  const name = useSelector((state) => state.auth.userData.name)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Login',
      slug: "/login",
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: "/signup",
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: "/add-post",
      active: authStatus
    },
    
  ]


  return (
    <header className='py-3 shadow bg-gray-300 mb-4 rounded-md text-blue-900'>
      <Container>
        <nav className='flex items-center justify-between relative'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='100px' />
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={()=>  setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>



          <ul className={`flex flex-col sm:flex-row ml-auto ${
              isMenuOpen ? "flex absolute top-12 right-12 bg-[#131516] border border-gray-500 rounded-md z-50" : "hidden"
            } sm:flex`}>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug)} 
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null )}
              {authStatus && (
                <>
                <li>
                  <LogoutBtn/>
                </li>
                <button className='bg-green-500 rounded-full px-6 py-2'>{name}</button></>
              )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header