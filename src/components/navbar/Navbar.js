import './navbar.css';

export default function Navbar() {
    
    const SearchBox = () => {
        return (
            <div className='search-box-wrapper'>
            <img className='magnifying-glass' src={process.env.PUBLIC_URL + '/magnifying-glass.svg'}/>
            <input className='search-box' placeholder='Search'/>
            </div>
        )
    }
    
    

    return (
        <nav>
            <div className='left-nav-items'>
                <svg className='new-task-btn' viewBox='0 0 40 40'>
                    <line x1='5' y1='20' x2='35' y2='20' stroke='var(--blue-1)' stroke-width='5px'/>
                    <line x1='20' y1='5' x2='20' y2='35' stroke='var(--blue-1)' stroke-width='5px'/>
                </svg>
                <SearchBox />
            </div>
            <svg className='settings-btn' viewBox='0 0 40 40'>
                <circle cx='20' cy='15' r='10' fill='lightgrey'/>
                <circle cx='20' cy='42' r='15' fill='lightgrey'/>
            </svg>
        </nav>
    )
}