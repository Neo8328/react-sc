import MenuItems from './MenuItems';
import { useGetMenuQuery } from '../../../store/indexApi';
import './Navbar.css';

const Navbar = () => {
  const {data, isSuccess} = useGetMenuQuery();
  // console.log(data)
  if (isSuccess){
    return (
      <div className='nav'>

        <nav >
          <ul className="menus">
            {data.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                />
              );
            })}
          </ul>
        </nav>
      </div>
      
    );
  }
};

export default Navbar;