import './sidebar.css';

export default function Sidebar() {

    const SidebarBtn = ({name, func, labelColor}) => {

        return (
            <div className='sidebar-btn'>
                {labelColor && <div className={`sidebar-label-box`} style={{backgroundColor: labelColor}}></div>}
                <div className='sidebar-btn-text'>{name}</div>
            </div>
        )
    }

    return (
        <div className='sidebar'>
            <SidebarBtn name={'All'} />
            <SidebarBtn name={'Today'} />
            <SidebarBtn name={'This Week'} />
            <SidebarBtn name={'Calendar'} />
            <hr/>
            <SidebarBtn name={'Personal'} labelColor='rgb(200,200,255)' />
            <SidebarBtn name={'Professional'} labelColor='rgb(200,255,200)' />
            <SidebarBtn name={'Urgent'} labelColor='rgb(255,200,200)' />
            <SidebarBtn name={'New Label'} />

        </div>
    )
}