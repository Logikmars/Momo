import './Nav.scss';
import NavBtn from './NavBtn/NavBtn';

export default () => {
    const btns = [
        { text: "about" },
        { text: "how to buy" },
        { text: "gallery" },
        { text: "social" }
    ];

    return (
        <div className='Nav'>
            {btns.map((btn, index) => (
                <NavBtn key={index} text={btn.text} />
            ))}
        </div>
    );
}
