import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { RiFullscreenLine } from "react-icons/ri";
import { FaReply } from "react-icons/fa";



export function EmailPreview({email, onRemove}) {
    const {
        id, subject, body, isRead, isStarred, sentAt, removedAt, from, to
    } = email

    return <section className="email-preview">
        <section className="email-preview-title">
            <p className="email-preview-subject">{subject}</p>
            <section className="email-preview-actions">
                <RiFullscreenLine/>
                <FaReply/>
                <IoIosSend/>
                <FaRegTrashAlt onClick={onRemove}/>
            </section>
        </section>
        <p className="email-preview-from">From: {from}</p>
        <p className="email-preview-body">{body}</p>
    </section>
}
