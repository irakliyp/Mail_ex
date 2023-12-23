import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const emailService = {
    query,
    save,
    remove,
    getById,
    createRobot,
    catalog
}

const STORAGE_KEY = 'emails'

_createRobots()

async function query(filterBy) {
    let emails = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        const { byText, byRead } = filterBy;
        if(byRead !== 'all') {
            emails = emails.filter((email => email.isRead === byRead))
        }
        if(byText !== '') {
            emails = emails.filter((email => email.subject.includes(byText) || email.body.includes(byText)));
        }
    }
    return emails
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(robotToSave) {
    if (robotToSave.id) {
        return storageService.put(STORAGE_KEY, robotToSave)
    } else {
        robotToSave.isOn = false
        return storageService.post(STORAGE_KEY, robotToSave)
    }
}

function createRobot(model = '', type = '', batteryStatus = 100) {
    return {
        model,
        batteryStatus,
        type
    }
}

function catalog(emails) {
    const inbox = [], starred = [], sent = [], trash = [], draft = [];
    emails.forEach(item => {
        if(item.removedAt) trash.push(item);
        else if(item.from === 'user@appsus.com') sent.push(item);
        else if(item.isStarred) starred.push(item)
        else inbox.push(item)
    })
    return {
            inbox,
            starred,
            sent,
            trash,
            draft
        }

}

function _createRobots() {
    let emails = utilService.loadFromStorage(STORAGE_KEY)
    if (!emails || !emails.length) {
        emails = [
            { id: 'e101', subject: 'Miss you!', body: 'Would love to catch up sometimes', isRead: true, isStarred: false, sentAt : 1551133930594, removedAt : null, from: 'momo@momo.com', to: 'user@appsus.com' },
            { id: 'e102', subject: 'Amazing!', body: 'Would love to catch up sometimes', isRead: true, isStarred: false, sentAt : 1551133930594, removedAt : null, from: 'momo@momo.com', to: 'user@appsus.com' },
            { id: 'e103', subject: 'I Love U!', body: 'Would love to catch up sometimes', isRead: false, isStarred: true, sentAt : 1551133930594, removedAt : null, from: 'momo@momo.com', to: 'user@appsus.com' },
            { id: 'e104', subject: 'Need your permission to add some long content!', body: 'Would love to catch up sometimes', isRead: false, isStarred: false, sentAt : 1551133930594, removedAt : null, from: 'user@appsus.com', to: 'momo@momo.com' },
            { id: 'e105', subject: 'I Love U!', body: 'Would love to catch up sometimes', isRead: false, isStarred: false, sentAt : 1551133930594, removedAt : null, from: 'momo@momo.com', to: 'user@appsus.com' },
            { id: 'e106', subject: 'Miss you!', body: 'Would love to catch up sometimes', isRead: false, isStarred: false, sentAt : 1551133930594, removedAt : 1551133930594, from: 'momo@momo.com', to: 'user@appsus.com' },
            { id: 'e107', subject: 'I Love U!', body: 'Would love to catch up sometimes', isRead: false, isStarred: false, sentAt : 1551133930594, removedAt : null, from: 'momo@momo.com', to: 'user@appsus.com' },
            { id: 'e108', subject: 'Miss you!', body: 'Would love to catch up sometimes', isRead: false, isStarred: false, sentAt : 1551133930594, removedAt : null, from: 'momo@momo.com', to: 'user@appsus.com' },
        ]
        utilService.saveToStorage(STORAGE_KEY, emails)
    }
}




