import css from "../SearchBox/SearchBox.module.css"

export default function SearchBox({ searchTerm, onFilter } )  {

    const searchContacts = (event) => {
        onFilter(event.target.value)

    }

    return (
        <div className={css.searchBox}>
            <label htmlFor="search">Find contacts by name:</label>
            <input name="search" type="text" value={searchTerm} onChange={searchContacts}/>
        </div>
        
    )
    
}