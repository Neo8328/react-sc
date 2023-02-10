import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';

import { Link } from 'react-router-dom';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  // console.log(items)
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    // window.innerWidth > 960 && setDropdown(true);
    setDropdown(true);
  };

  const onMouseLeave = () => {
    // window.innerWidth > 960 && setDropdown(false);
    setDropdown(false)
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.children ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 768 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={`${items.url}/1`}>{items.title}</Link>
            )}

            {/* {depthLevel > 0 &&
            window.innerWidth < 960 ? null : depthLevel > 0 &&
              window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )} */}
            {items.children.length === 0 ? <span></span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.children}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.children ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            {/* {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )} */}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.children}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url/1}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;