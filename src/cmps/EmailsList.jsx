import {EmailDetails} from "./EmailDetails";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

export function EmailsList({emailsList, onEmailChange, onRemoveClick}) {
    const params = useParams()
    useEffect(() => {
    }, [])

    return <ul className="emails-list">
        {emailsList.length &&
            emailsList.map(item => {
            return <li key={item.id}>
                <EmailDetails email={item} onEmailChange={onEmailChange} onRemoveClick={onRemoveClick}/>
            </li>
        })
        }
    </ul>
}
