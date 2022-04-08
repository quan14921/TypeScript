
import { useForm , SubmitHandler} from 'react-hook-form';
import { NavLink, useParams } from 'react-router-dom';
type Props = {
}

const Navbar = (props: Props) => {
  const {handleSubmit} = useForm();
 const onlogout:SubmitHandler = () => {
   localStorage.removeItem('user');
   window.location.reload();
 }
  return (
    <ul id="MenuItems" className="p-2 flex flex-wrap content-center absolute right-5">
    <li className="text-lg py-2 px-4">
      <NavLink className="p-2" aria-current="page" to="/">Home</NavLink>
      </li>
    <li className="text-lg py-2 px-4">
    <NavLink className="p-2" to="/product">Product </NavLink>
      </li>
    <li className="text-lg py-2 px-4">

    {localStorage.getItem('user') ? <button type="button" className="btn btn-secondary btn-lg" onClick={handleSubmit(onlogout)} >Đăng xuất</button>  : <NavLink className="p-2" to="/Signin">Signin </NavLink>}
      </li>
   </ul>
    
  )
}

export default Navbar
