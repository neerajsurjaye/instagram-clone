import { AiFillHome } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { BsPlayFill } from 'react-icons/bs'

let BottomNav = () => {

    return (
        <nav className="bottom-nav">

            <div className="nav-links btn">
                <AiFillHome className='nav-icons'></AiFillHome>
            </div>

            <div className="nav-links btn">
                <BiSearchAlt2 className='nav-icons'></BiSearchAlt2>
            </div>

            <div className="nav-links btn">
                <BsPlayFill className='nav-icons'></BsPlayFill>
            </div>

            <div className="nav-links btn">
                <FaRegHeart className='nav-icons'></FaRegHeart>
            </div>

            <div className="nav-links btn">
                <img src='/assets/images/user.png' alt="" className='bottom-nav-image'></img>
            </div>

        </nav>
    )

}

let BottomNavMob = () => {
    return <div className="bottom-nav-mob">
        <BottomNav></BottomNav>
    </div>
}

let BottomNavDesk = () => {
    return <div className="bottom-nav-desk">
        <BottomNav></BottomNav>
    </div>
}

export default BottomNav
export { BottomNavMob, BottomNavDesk }