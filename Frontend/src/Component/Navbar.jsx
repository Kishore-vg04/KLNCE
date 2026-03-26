import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.gif';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = ({ name, about }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className='flex justify-between px-7 h-24'>

        <div className='h-20 w-20 grid place-items-center'>
          <img src={logo} alt="Logo" className='w-full h-full object-contain' />
        </div>

        <div className='flex flex-1 justify-center items-center'>
          <div className='bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 px-20 py-2 rounded-full'>
            <ul className='flex gap-10 items-center'>

              <li
                onClick={() => navigate('/')}
                className={`flex items-center gap-1 text-lg px-3 rounded-lg cursor-pointer transition duration-300
                ${location.pathname === '/'
                    ? 'bg-white text-purple-700'
                    : 'text-white hover:bg-white hover:text-purple-500'}`}
              >
                <HomeIcon fontSize="small" />
                Home
              </li>

              <li
                onClick={() => navigate('/about')}
                className={`text-lg px-3 rounded-lg cursor-pointer transition duration-300
                ${location.pathname === '/about'
                    ? 'bg-white text-purple-700'
                    : 'text-white hover:bg-white hover:text-purple-500'}`}
              >
                About
              </li>

              <li
                onClick={() => navigate('/department')}
                className={`text-lg px-3 rounded-lg cursor-pointer transition duration-300
                ${location.pathname === '/department'
                    ? 'bg-white text-purple-700'
                    : 'text-white hover:bg-white hover:text-purple-500'}`}
              >
                Department
              </li>

              <li
                onClick={() => navigate('/placement')}
                className={`text-lg px-3 rounded-lg cursor-pointer transition duration-300
                ${location.pathname === '/placement'
                    ? 'bg-white text-purple-700'
                    : 'text-white hover:bg-white hover:text-purple-500'}`}
              >
                Placement
              </li>

              <li
                onClick={() => navigate('/resources')}
                className={`text-lg px-3 rounded-lg cursor-pointer transition duration-300
                ${location.pathname === '/resources'
                    ? 'bg-white text-purple-700'
                    : 'text-white hover:bg-white hover:text-purple-500'}`}
              >
                Resources
              </li>

              <li
                onClick={() => navigate('/activities')}
                className={`text-lg px-3 rounded-lg cursor-pointer transition duration-300
                ${location.pathname === '/activities'
                    ? 'bg-white text-purple-700'
                    : 'text-white hover:bg-white hover:text-purple-500'}`}
              >
                Activities
              </li>

            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex items-center gap-4'>
          <button className='text-purple-700 bg-white/90 px-2 border-2 border-purple-700 rounded-lg active:scale-95'>
            Admission 2026
          </button>
          <button className='text-purple-700 bg-white/90 px-2 border-2 border-purple-700 rounded-lg active:scale-95'>
            Fee Structure
          </button>
        </div>
      </div>

      {/* Heading */}
      <div>
        <h1 className='text-6xl font-serif text-center text-purple-800 tracking-tight'>
          {name}
        </h1>
        <p className='text-md font-serif text-center py-2 text-gray-700'>
          {about}
        </p>
      </div>
    </div>
  );
};

export default Navbar;