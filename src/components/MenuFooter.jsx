import { NavLink, useLocation } from "react-router-dom"
import { CalculatorIcon, HomeIcon, UserClassicIcon } from "."

export const MenuFooter = () => {

  const CustomLink = ({ to, children }) => {
    const location = useLocation().pathname;
    const linkBase = location.includes(to);
    const act = (linkBase  ? 'text-primary' : 'text-white');

    return (
      <NavLink to={to} className={` ${act}`}>
            { children }
      </NavLink>
    )
  }

  return (
    <div className=" justify-center w-full h-20 bg-dark absolute bottom-0">
        <div className="flex items-center justify-around p-2">
          
          <CustomLink to='/home'>
            <HomeIcon className="w-12 h-12"/>
          </CustomLink>

          <CustomLink to='/tools'>
            <CalculatorIcon className="w-10 h-10"/>
          </CustomLink>

          <CustomLink to='/user'>
            <UserClassicIcon className="w-12 h-12"/>
          </CustomLink>          
        </div>
    </div>
  )
}
