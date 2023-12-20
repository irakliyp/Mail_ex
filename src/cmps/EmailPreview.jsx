import Trash from '../assets/imgs/trash.png'
import Reply from '../assets/imgs/reply.png'
import Send from '../assets/imgs/send.png'
import Expand from '../assets/imgs/expand.png'


export function EmailPreview({email, onRemove}) {
    const {
        id, subject, body, isRead, isStarred, sentAt, removedAt, from, to
    } = email

    return <section className="email-preview">
        <section className="email-preview-title">
            <p className="email-preview-subject">{subject}</p>
            <section className="email-preview-actions">
                <img src={Expand} className="icon"/>
                <img src={Reply} className="icon"/>
                <img src={Send} className="icon"/>
                <img src={Trash} className="icon" onClick={onRemove}/>
            </section>
        </section>
        <p className="email-preview-from">From: {from}</p>
        <p className="email-preview-body">{body}</p>
    </section>
}
