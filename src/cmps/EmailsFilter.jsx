export function EmailsFilter() {

    return <section className="email-filter">
        <label className="email-filter-text">Filter by text
            <input type="text"/>
        </label>
        <select name="Filter by is read">
            <option value="true">Read</option>
            <option value="false">Not Read</option>
            <option value="all">All</option>
        </select>
    </section>
}
