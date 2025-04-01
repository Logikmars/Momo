import './NavBtn.scss';

export default ({ text, activeTab, index }) => {
    return (
        <a href={`#${text.replace(' ', '_').replace(' ', '_')}`}
            className={`NavBtn ${activeTab === (index + 1) && `NavBtn_${index + 1} NavBtn_activated`}`}>
            <div className='NavBtn_text'>
                {text}
            </div>
            <div className={`NavBtn_anim free_img `}>
                <div className={`NavBtn_anim_black ${activeTab === (index + 1) && `NavBtn_anim_black_${index + 1}`}`}></div>
            </div>
            <div className='NavBtn_anim free_img'>
                <div className='NavBtn_anim_white'></div>
            </div>
        </a>
    )
}
