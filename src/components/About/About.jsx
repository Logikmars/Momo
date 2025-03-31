import Nav from '../Nav/Nav';
import './About.scss';
import AboutSliderItem from './AboutSliderItem/AboutSliderItem';

export default () => {
    const listItem = [
        {
            img: '/img/bear1.webp',
            title: 'Buy $MOMO',
            description: 'Download Phantom or your wallet of choice from the store. Desktop users, download the Google Chrome extension by going to Phantom'
        }
    ];

    return (
        <div className='About'>
            <div className='About__paper'>
                <img src="/img/paper.webp" alt="" />
            </div>
            <div className='About__nav'>
                <Nav />
            </div>
            <div className='About__slider'>
                {listItem.map((el, index) => (
                    <AboutSliderItem 
                        key={index} 
                        index={index + 1} 
                        img={el.img} 
                        title={el.title} 
                        description={el.description} 
                    />
                ))}
            </div>
        </div>
    );
};
