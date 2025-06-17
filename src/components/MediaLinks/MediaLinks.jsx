import './MediaLinks.scss';

export default ({ large }) => {
    return (

        <div className={`MediaLinks ${large && 'MediaLinks_large'}`}>
            <a href="https://x.com/PawseHQ">
                <img src="/img/x.png" alt="" />
            </a>
            {/* <a href="#">
                <img src="/img/tg.png" alt="" />
            </a> */}
            <a href="https://dexscreener.com/solana/6xyymcm2vuffrqxkhxrtgpn6sdn3hkb4jdubevr1wq8f">
                <img src="/img/dex.png" alt="" />
            </a>
        </div>
    )
}