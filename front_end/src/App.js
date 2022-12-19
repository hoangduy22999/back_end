import { logout } from '@/core/redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <div>
        <button
          onClick={() => {
            dispatch(logout());
            navigate('/login');
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default App;
