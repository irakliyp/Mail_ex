import {NavigationPanel} from "../cmps/NavigationPanel";
import {emailService} from "../services/email.service.js";
import {useEffect, useState} from "react";
import {EmailsList} from "../cmps/EmailsList";
import {EmailsFilter} from "../cmps/EmailsFilter";
import NoRecords from '../assets/imgs/no-records.png'
import {Link, Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";



export function Email() {

    const [emails, setEmails] = useState(null)
    const [emailsListLabel, setEmailsListLabel] = useState('inbox')
    const [filterBy, setFilterBy] = useState({byText: '', byRead: 'all'})
    const navigate = useNavigate();

    useEffect(() => {
        loadEmails();
    }, [])

    useEffect(() => {
        if(emails) {
            if(emailsListLabel) {
                setEmailsListLabel(emailsListLabel)
            }
            else {
                setEmailsListLabel('inbox')
            }
        }
    }, [emails])

    useEffect(() => {
        navigate(`/email/${emailsListLabel}`)
    }, [emailsListLabel])

    async function loadEmails() {
        const notCataloged = await emailService.query(filterBy)
        const emails = emailService.catalog(notCataloged)
        setEmails(emails)
    }

    function onNavigationChange(selected) {
        setEmailsListLabel(selected.toLowerCase());

    }

    async function onEmailChange(email) {
        await emailService.save(email)
        loadEmails();
    }

    async function onRemoveClick(emailId) {
        await emailService.remove(emailId)
        loadEmails();
    }

    if(!emails) return <div>Loading...</div>
    const { inbox, starred, draft, sent, trash } = emails;

    const emailsList = Object.entries(emails).find((item) =>{return item[0]===emailsListLabel}).pop()

    return (
        <section className="email">
            <section>
                <NavigationPanel
                    inbox={inbox.length}
                    starred={starred.length}
                    sent={sent.length}
                    draft={draft.length}
                    trash={trash.length}
                    emailsListLabel={emailsListLabel}
                    onNavigationChange={onNavigationChange}
                />
            </section>

            <section className="filter">
                <EmailsFilter/>
                {!emailsList.length ?
                    <img src={NoRecords}/> :
                    <Outlet context={{emails, onEmailChange, onRemoveClick}}/>}
                    {/*<EmailsList emailsList={emailsList} onEmailChange={onEmailChange} onRemoveClick={onRemoveClick}/>*/}
            </section>
        </section>
    )
}
