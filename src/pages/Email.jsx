import {NavigationPanel} from "../cmps/NavigationPanel";
import {emailService} from "../services/email.service.js";
import {useEffect, useState} from "react";
import {EmailsList} from "../cmps/EmailsList";
import {EmailsFilter} from "../cmps/EmailsFilter";
import NoRecords from '../assets/imgs/no-records.png'



export function Email() {

    const [emails, setEmails] = useState(null)
    const [emailsList, setEmailsList] = useState(null)

    useEffect(() => {
        loadEmails();
    }, [])

    useEffect(() => {
        if(emails) {
            console.log(emails)
            if(emailsList) {
                setEmailsList(emailsList)
            }
            else {
                setEmailsList(emails.inbox)
            }
        }
    }, [emails])

    async function loadEmails() {
        const notCataloged = await emailService.query()
        const emails = emailService.catalog(notCataloged)
        setEmails(emails)
    }

    function onNavigationChange(selected) {
        switch (selected.toLowerCase()) {
            case 'inbox':
                setEmailsList(emails.inbox)
                break;
            case 'starred':
                setEmailsList(emails.starred)
                break;
            case 'sent':
                setEmailsList(emails.sent)
                break;
            case 'draft':
                setEmailsList(emails.draft)
                break;
            case 'trash':
                setEmailsList(emails.trash)
                break;

        }
    }

    async function onEmailChange(email) {
        await emailService.save(email)
        loadEmails();
    }

    async function onRemoveClick(emailId) {
        await emailService.remove(emailId)
        loadEmails();
    }

    if(!emails || !emailsList) return <div>Loading...</div>
    const { inbox, starred, draft, sent, trash } = emails;

    return (
        <section className="email">
            <section>
                <NavigationPanel
                    inbox={inbox.length}
                    starred={starred.length}
                    sent={sent.length}
                    draft={draft.length}
                    trash={trash.length}
                    onNavigationChange={onNavigationChange}
                />
            </section>

            <section>
                <EmailsFilter/>
                {!emailsList.length ?
                    <img src={NoRecords}/> :
                    <EmailsList emailsList={emailsList} onEmailChange={onEmailChange} onRemoveClick={onRemoveClick}/>
                }
            </section>
        </section>
    )
}
