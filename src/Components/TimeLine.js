import { FaRegHeart } from "react-icons/fa"
import { IoChatbubbleOutline } from "react-icons/io5"
import { FiSend } from "react-icons/fi"
import { BsBookmark } from "react-icons/bs"

let TimeLine = () => {

    let posts = [
        {
            name: "UserA",
            url: "https://upload.wikimedia.org/wikipedia/commons/1/15/%28Usera%29_Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg"
        },

        {
            name: "Blender3d",
            url: "https://www.blender.org/wp-content/uploads/2019/07/vse_custom_grade.jpg"
        }
        ,
        {
            name: "Android",
            url: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/HeroHomepage_2880x1200.jpg"
        },
        {
            name: "Microsoft",
            url: "https://www.cnet.com/a/img/NmTo06FvEM6ZR9ld7a3_wlBKz7Y=/1200x675/2019/02/04/8311b046-6f2b-4b98-8036-e765f572efad/msft-microsoft-logo-2-3.jpg"
        }

    ]

    return (
        <div className="time-line">

            {((x) => {
                let out = []

                for (let i = 0; i < x.length; i++) {

                    let y = x[i]
                    out.push(<Post name={y.name} url={y.url} key={i}></Post>)
                }

                return out

            })(posts)}

        </div>
    )

}

let Post = (props) => {

    return (
        <div className="post">

            <div className="post-header">

                <img className="post-user-img" src="/assets/images/user.png" alt="" />
                <div className="post-user-name">{props.name}</div>

            </div>

            <div className="post-image-cont">
                <img className="post-image" src={props.url} alt="" />
            </div>

            <div className="post-nav">

                <FaRegHeart className="post-nav-buttons btn"></FaRegHeart>
                <IoChatbubbleOutline className="post-nav-buttons btn"></IoChatbubbleOutline>
                <FiSend className="post-nav-buttons btn"></FiSend>
                <BsBookmark className="post-nav-buttons btn right"></BsBookmark>

            </div>

            <div className="post-desc">
                <strong>{props.name}</strong> Lorem ipsum dolor what is sit amet consectetur, adipisicing elit. Est aperiam asperiores non quod cupiditate sunt voluptate cumque, esse ipsam dolore unde quia at explicabo qui perferendis laudantium a nesciunt fugit voluptates accusantium?

                <div className="post-time">
                    xyz minutes ago
                </div>
            </div>



        </div>
    )

}

export default TimeLine