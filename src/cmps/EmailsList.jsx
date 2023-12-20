import {EmailItem} from "./EmailItem.jsx";
import {useEffect} from "react";

export function EmailsList({emailsList, onEmailChange, onRemoveClick}) {
    useEffect(() => {
    }, [])

    console.log(emailsList)

    return <ul className="emails-list">
        {emailsList.length &&
            emailsList.map(item => {
            return <li key={item.id}>
                <EmailItem email={item} onEmailChange={onEmailChange} onRemoveClick={onRemoveClick}/>
            </li>
        })
        }
    </ul>
}
