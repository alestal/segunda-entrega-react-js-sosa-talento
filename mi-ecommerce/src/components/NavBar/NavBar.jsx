

import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          gap: 10,
          justifyContent: 'center',
          marginBottom: 30,
        }}
      >
        <button>
          <Link>
            <img
              style={{ width: 90 }}
              src="https://i.etsystatic.com/41980530/r/il/9322a3/5972131276/il_fullxfull.5972131276_jf9i.jpg"
              alt="logo"
            />
          </Link>
        </button>
        <button>
          <Link to="/">
           <h1>Home</h1>
          </Link> </button>
        <button>
          <Link to="/Contact">Contact</Link>
        </button>
        <button>
          <Link to="/About">About us</Link>
        </button>
      </nav>
    </>
  );
}
