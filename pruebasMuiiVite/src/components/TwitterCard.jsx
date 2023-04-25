import { useState } from "react"

export default function TwitterCard({ children, userName, isFollow }) {
    const [follow, setFollow] = useState(isFollow)
    // console.log(userName)

    const textClase = follow ? 'isFollow' : ' '
    const textButon = follow ? 'Siguiendo' : 'Seguir'

    // if(textButon=='Siguiendo'){
    //     textButon='Dejar de Seguir'
    // }

    const handleClick = () => {
        setFollow(!follow)
        // console.log(textButon)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}/`} alt="Avatar del usuario"></img>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={`tw-followCard-button ${textClase}`} onClick={handleClick}>
                    <span className='tw-followCard-text'>{textButon}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
} 