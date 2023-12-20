import Starred from '../assets/imgs/starred.png'
import Star from '../assets/imgs/star.png'
import Unread from '../assets/imgs/unread.png'
import Share from '../assets/imgs/share.png'
import Trash from '../assets/imgs/trash.png'
import {useState} from "react";
import {EmailPreview} from "./EmailPreview";

export function EmailItem({ email, onEmailChange, onRemoveClick }) {
    const {
        id, subject, body, isRead, isStarred, sentAt, removedAt, from, to
    } = email

    const [hovered, setHovered] = useState(false)
    const [read, setRead] = useState(isRead)
    const [preview, setPreview] = useState(false)

    function onHover(hovered) {
        setHovered(hovered)
    }

    function onRead(read, ev) {
        ev.stopPropagation();
        setRead(read);
        onEmailChange({...email, isRead: read});
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

    function onClick(ev) {
        setPreview(!preview);
        onRead(true, ev);
    }

    const dynStarSrc = isStarred? Starred : Star;
    const sentDate = new Date(sentAt).toDateString()
    const recordClass = `email-record${read? '' : ' unread'}`

    return <section className="email-item">
        <section
            className={recordClass}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            onClick={onClick}>
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
        {preview && <EmailPreview email={email} onRemove={onRemove}/>}
    </section>
}
