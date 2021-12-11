let StatusBar = () => {

    return (
        <div className="status-bar">
            <section className='status-bar'>

                {(() => {
                    let out = []
                    for (let i = 0; i < 20; i++) {
                        out.push(<UserStatus name="name"></UserStatus>)
                    }

                    return out
                })()}



            </section >
            <div className="status-bar-shadow"></div>

        </div >
    )

}

let UserStatus = (props) => {

    let image = null;
    if (props.image == null) {
        image = '/assets/images/user.png'
    } else {
        image = props.image
    }

    return (
        <div className="user-status">

            <div className="user-gradient">

                <img className="status-image" src={image} alt="" />

            </div>

        </div>
    )

}

export default StatusBar