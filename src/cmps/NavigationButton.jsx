import {useState} from "react";
import { IoMdSend } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { RiDraftFill } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineInbox } from "react-icons/hi";




export function NavigationButton({ label, amount, onNavigationChange, selected }) {
    const renderIcon = () => {
        switch (label) {
            case 'Inbox':
                return <HiOutlineInbox/>
            case 'Starred':
                return <CiStar/>
            case 'Sent':
                return <IoMdSend/>
            case 'Trash':
                return <FaRegTrashAlt/>
            case 'Draft':
                return <RiDraftFill/>
        }
    }

    const btnNavClassName = `btn-navigation${selected ? ' selected' : ''}`

    return <button className={btnNavClassName} onClick={() => onNavigationChange(label)}>
        <div className="btn-navigation-container">
            {renderIcon()}
            <span>{label}</span>
        </div>
        <span>{amount}</span>
    </button>
}
