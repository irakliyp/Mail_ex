import {useState} from "react";

export function NavigationButton({ label, src, amount, onNavigationChange, selected }) {

    const btnNavClassName = `btn-navigation${selected ? ' selected' : ''}`

    return <button className={btnNavClassName} onClick={() => onNavigationChange(label)}>
        <div className="btn-navigation-container">
            <img src={src} className="icon"/>
            <span>{label}</span>
        </div>
        <span>{amount}</span>
    </button>
}
