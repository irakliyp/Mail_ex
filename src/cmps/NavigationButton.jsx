
export function NavigationButton({ label, src, amount, onNavigationChange }) {

    return <button className="btn-navigation" onClick={() => {onNavigationChange(label)}}>
        <div className="btn-navigation-container">
            <img src={src} className="icon"/>
            <span>{label}</span>
        </div>
        <span>{amount}</span>
    </button>
}
