import './MediaLinks.scss';

export default ({ large }) => {
    return (

        <div className={`MediaLinks ${large && 'MediaLinks_large'}`}>
            <a href="#">
                <img src="/img/x.png" alt="" />
            </a>
            <a href="#">
                <img src="/img/tg.png" alt="" />
            </a>
            <a href="#">
                <img src="/img/dex.png" alt="" />
            </a>
        </div>
    )
}