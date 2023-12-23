import {useState} from "react";
import {EmailPreview} from "./EmailPreview";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";




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

    const sentDate = new Date(sentAt).toDateString()
    const recordClass = `email-record${read? '' : ' unread'}`

    return <section className="email-item">
        <section
            className={recordClass}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            onClick={onClick}>
            {isStarred ?
                <CiStar onClick={onStar}/> :
                <FaStar onClick={onStar}/>
            }
            <p className="grid-col-2">{from}</p>
            <p className="grid-col-3">{subject}</p>
            {!hovered?
            <p className="grid-col-4">{sentDate}</p> :
                <p className="icons grid-col-4">
                    <MdIosShare/>
                    <MdMarkEmailUnread onClick={event => onRead(false, event)}/>
                    <FaRegTrashAlt onClick={onRemove}/>
                </p>
            }
        </section>
        {preview && <EmailPreview email={email} onRemove={onRemove}/>}
    </section>
}
