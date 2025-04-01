import './Nav.scss';
import NavBtn from './NavBtn/NavBtn';

export default ({ activeTab, secactiveTab, theactiveTab }) => {
    const btns = [
        { text: "about", activeTab: activeTab},
        { text: "how to buy", activeTab: secactiveTab },
        { text: "gallery", activeTab: theactiveTab},
        { text: "social" }
    ];

    return (
        <div className='Nav'>
            {btns.map((btn, index) => (
                <NavBtn key={index} text={btn.text} activeTab={btn.activeTab}/>
            ))}
        </div>
    );
}
