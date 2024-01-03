import {EmailItem} from "./EmailItem.jsx";
import {useEffect} from "react";
import {useLocation, useMatch, useOutletContext, useParams, useRoutes} from "react-router-dom";

export function EmailsList() {
    debugger;
    const location = useLocation();
    const folder = location.pathname.slice(location.pathname.lastIndexOf('/') +1);
    const {emails, onEmailChange, onRemoveClick} = useOutletContext();
    console.log("EMAILS ", emails[folder])

    useEffect(() => {
    }, [])

    console.log(folder)

    return <ul className="emails-list">
        {emails[folder].length &&
            emails[folder].map(item => {
            return <li key={item.id}>
                <EmailItem email={item} onEmailChange={onEmailChange} onRemoveClick={onRemoveClick}/>
            </li>
        })
        }
    </ul>
}
