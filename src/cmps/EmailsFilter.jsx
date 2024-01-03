import { FaSearch } from "react-icons/fa";


export function EmailsFilter() {

    return <section className="email-filter">
        <div className="email-filter-text">
            <FaSearch className="email-filter-text-icon"/>
            <input className="email-filter-text-input" placeholder="Search by text"/>
        </div>
        <select className="email-filter-options" name="Filter by is read">
            <option value="true">Read</option>
            <option value="false">Not Read</option>
            <option value="all">All</option>
        </select>
    </section>
}
