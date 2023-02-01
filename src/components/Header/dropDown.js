
import * as React from 'react';
import './dropDown.css';

const DropdownComponent = ()=> {
    




  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>About</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Career</button>
          </li>
          <li className="menu-item">
            <button>Team</button>
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div></div>}
    </div>
  );
};

export default DropdownComponent;