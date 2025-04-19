import './Nav.scss';
import NavBtn from './NavBtn/NavBtn';

export default ({ activeTab, secactiveTab, theactiveTab }) => {
    const btns = [
        { text: "ABOUT" },
        { text: "HOW TO BUY" },
        { text: "TOKENOMICS" },
        { text: "GALLERY" },
        { text: "SOCIALS" }
    ];

    return (
        <div className='Nav'>
            {btns.map((btn, index) => (
                <NavBtn key={index} index={index} text={btn.text} activeTab={activeTab} />
            ))}
        </div>
    );
}
