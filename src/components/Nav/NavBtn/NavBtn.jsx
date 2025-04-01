import './NavBtn.scss';

export default ({ text, activeTab }) => {
    return (
        <a href={`#${text.replace(' ', '_').replace(' ', '_')}`} className={`NavBtn ${activeTab === 1 ? "NavBtn_1" :
            activeTab === 2 ? "NavBtn_2" :
                activeTab === 3 ? "NavBtn_3" :
                    activeTab === 4 ? "NavBtn_4" : ""
            }`}>
            <div className='NavBtn_text'>
                {text}
            </div>
            <div className='NavBtn_anim free_img'>
                <div className='NavBtn_anim_black'></div>
            </div>
            <div className='NavBtn_anim free_img'>
                <div className='NavBtn_anim_white'></div>
            </div>
        </a>
    )
}
