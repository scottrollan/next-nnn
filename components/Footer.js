const Footer = () => {
    return(
        <footer className='footerBackground'>
            <img className='footerPhoto' src='../static/N3nameTransparent.png' alt=''/>
        <style jsx>{`
            .footerBackground {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.8);
            }
            .footerPhoto {
                width: 30%;
                margin: 1vh 35% 0;
            }
        `}</style>
        </footer>
    )
};

export default Footer;