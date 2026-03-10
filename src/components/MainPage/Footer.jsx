import "./Footer.css"

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footor-contact-section">
                        <span className="footer-title">Teknolojik<br /> Yemekler</span>
                        <ul className="footer-contact">
                            <li>
                                <img src="./images/iteration-2-images/footer/icons/icon-1.png" alt="Location" />
                                <span>341 Londonderry Road,<br /> Istanbul Türkiye</span>
                            </li>
                            <li>
                                <img src="./images/iteration-2-images/footer/icons/icon-2.png" alt="Email" />
                                <span>aciktim@teknolojikyemekler.com</span>
                            </li>
                            <li>
                                <img src="./images/iteration-2-images/footer/icons/icon-3.png" alt="Telephone" />
                                <span>+90 216 123 45 67</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h2>Hot Menu</h2>
                        <div className="footer-menu-list">
                            <ul>
                                <li>Terminal Pizza</li>
                                <li>5 Kişilik Hackathlon Pizza</li>
                                <li>useEffect Tavuklu Pizza</li>
                                <li>Beyaz Console Frosty</li>
                                <li>Testler Geçti Mutlu Burger</li>
                                <li>Position Absolute Acı Burger</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-instagram">
                        <h2>Instagram</h2>
                        <div className="footer-photos">
                            <div>
                                <img src="./images/iteration-2-images/footer/insta/li-0.png" alt="Instagram Photo" />
                                <img src="./images/iteration-2-images/footer/insta/li-1.png" alt="Instagram Photo" />
                                <img src="./images/iteration-2-images/footer/insta/li-2.png" alt="Instagram Photo" />
                            </div>
                            <div>
                                <img src="./images/iteration-2-images/footer/insta/li-3.png" alt="Instagram Photo" />
                                <img src="./images/iteration-2-images/footer/insta/li-4.png" alt="Instagram Photo" />
                                <img src="./images/iteration-2-images/footer/insta/li-5.png" alt="Instagram Photo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2023 Teknolojik Yemekler.</span>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </footer>
        </>
    )
}