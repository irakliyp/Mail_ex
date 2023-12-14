import Starred from '../assets/imgs/starred.png'
import Star from '../assets/imgs/star.png'
import Unread from '../assets/imgs/unread.png'
import Share from '../assets/imgs/share.png'
import Trash from '../assets/imgs/trash.png'
import {useState} from "react";

export function EmailDetails({ email, onEmailChange, onRemoveClick }) {
    const {
        id, subject, body, isRead, isStarred, sentAt, removedAt, from, to
    } = email

    const [hovered, setHovered] = useState(false)

    function onHover(hovered) {
        setHovered(hovered)
    }

    function onRead(read, ev) {
        ev.stopPropagation();
        onEmailChange({...email, isRead: read})
    }

    function onStar(ev) {
        ev.stopPropagation();
        onEmailChange({...email, isStarred: !isStarred})
    }

    function onRemove(ev) {
        ev.stopPropagation();
        onEmailChange({...email, removedAt: (new Date).getTime()})
        if(removedAt)
        {
            onRemoveClick(id)
        }
    }

    const dynStarSrc = isStarred? Starred : Star;
    const sentDate = new Date(sentAt).toDateString()
    const recordClass = `email-record${isRead? '' : ' unread'}`

    return <section
        className={recordClass}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        onClick={(ev) => onRead(true, ev)}>
        <img src={dynStarSrc} className="icon grid-col-1" onClick={(ev) => onStar(ev)}/>
        <p className="grid-col-2">{from}</p>
        <p className="grid-col-3">{subject}</p>
        {!hovered?
        <p className="grid-col-4">{sentDate}</p> :
            <p className="icons grid-col-4">
                <img src={Share} className="icon"/>
                <img src={Unread} className="icon" onClick={(ev) => onRead(false, ev)}/>
                <img src={Trash} className="icon" onClick={(ev)=> {onRemove(ev)}}/>
            </p>
        }
    </section>
}
