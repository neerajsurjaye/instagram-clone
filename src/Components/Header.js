// import { HiHome } from "react-icons/hi";
import { BottomNavDesk } from "./BottomNav";

let Header = () => {

    return <header className="header">
        <img className="title"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt=""
        >
            {/* Instagram */}
        </img>

        <BottomNavDesk></BottomNavDesk>

    </header>
}

export default Header