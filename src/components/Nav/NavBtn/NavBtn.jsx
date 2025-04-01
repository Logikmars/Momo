import './NavBtn.scss';

export default ({ text, activeTab, index }) => {
    return (
        <a href={`#${text.replace(' ', '_').replace(' ', '_')}`}
            className={`NavBtn ${activeTab === (index + 1) && `NavBtn_${index + 1}`}`}>
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
