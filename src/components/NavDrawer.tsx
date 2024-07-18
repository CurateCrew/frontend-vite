import { navItems } from "./NavItems"

interface INavProps {
  show: boolean
}
const NavDrawer: React.FC<INavProps> = ({show}) => {
  return(
    <div className="absolute z-50 overflow-y-auto w-3/4">
      { show && (
      <div className="bg-white shadow-lg">
      {navItems.map((item, index) => 
      <div key={index} className="">
        <p>{item.name}</p>
      </div>
    )}
    </div>)}
    </div>
  )
}

export default NavDrawer