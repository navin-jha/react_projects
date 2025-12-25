import {NavLink} from "react-router-dom";
function Header() {
    return (
        <>
            <div className="flex items-center h-16 justify-center bg-gray-800 p-4">
                <ul>
                    <li>
                        <NavLink to="/home" className="h-30 text-white px-4 hover:text-gray-400 ">
                        Home</NavLink>
                        </li>

                </ul>

            </div>
        </>
    );
}
export default Header;