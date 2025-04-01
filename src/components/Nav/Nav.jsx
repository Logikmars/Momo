import './Nav.scss';
import NavBtn from './NavBtn/NavBtn';

export default ({ activeTab, secactiveTab, theactiveTab }) => {
    const btns = [
        { text: "ABOUT", activeTab: activeTab },
        { text: "HOW TO BUY", activeTab: secactiveTab },
        { text: "GALLERY", activeTab: theactiveTab },
        { text: "SOCIAL" }
    ];

    return (
        <div className='Nav'>
            {btns.map((btn, index) => (
                <NavBtn key={index} text={btn.text} activeTab={btn.activeTab} />
            ))}
        </div>
    );
}
