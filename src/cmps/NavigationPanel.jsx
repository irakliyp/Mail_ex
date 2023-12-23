import ComposeImg from '../assets/imgs/compose.png'
import InboxImg from '../assets/imgs/inbox.png'
import StarImg from '../assets/imgs/star.png'
import DraftImg from '../assets/imgs/draft.png'
import TrashImg from '../assets/imgs/trash.png'
import SentImg from '../assets/imgs/sent.png'
import {NavigationButton} from "./NavigationButton";

export function NavigationPanel({inbox, starred, sent, draft, trash, onNavigationChange, emailsListLabel }) {

    return <section className="navigation-panel">
        <button className="btn-compose">
            <img className="icon" src={ComposeImg}/>
            <span>Compose</span>
        </button>
        <div className="horizontal-line"/>
        <section className="navigation">
            <NavigationButton label="Inbox" amount={inbox} onNavigationChange={onNavigationChange} selected={emailsListLabel==='inbox'}/>
            <NavigationButton label="Starred" amount={starred} onNavigationChange={onNavigationChange} selected={emailsListLabel==='starred'}/>
            <NavigationButton label="Sent" amount={sent} onNavigationChange={onNavigationChange} selected={emailsListLabel==='sent'}/>
            <NavigationButton label="Draft" amount={draft} onNavigationChange={onNavigationChange} selected={emailsListLabel==='draft'}/>
            <NavigationButton label="Trash" amount={trash} onNavigationChange={onNavigationChange} selected={emailsListLabel==='trash'}/>
        </section>
    </section>
}
