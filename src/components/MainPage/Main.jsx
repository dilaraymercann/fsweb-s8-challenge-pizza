export default function Main() {
    return (
        <>
            <main>
                <nav className="category-nav">
                    <ul className="category-list">

                        <li className="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/1.svg" alt="YENİ! Kore" />
                                <span>YENİ! Kore</span>
                            </a>
                        </li>

                        <li className="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/2.svg" alt="Pizza" />
                                <span>Pizza</span>
                            </a>
                        </li>

                        <li className="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/3.svg" alt="Burger" />
                                <span>Burger</span>
                            </a>
                        </li>

                        <li className="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/4.svg" alt="Kızartmalar" />
                                <span>Kızartmalar</span>
                            </a>
                        </li>

                        <li className="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/5.svg" alt="Fast Food" />
                                <span>Fast food</span>
                            </a>
                        </li>

                        <li className="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/6.svg" alt="Gazlı İçecek" />
                                <span>Gazlı İçecek</span>
                            </a>
                        </li>

                    </ul>
                </nav>
                <div className="grouped-menu">
                    <div className="first-menu">
                        <img src="images/iteration-2-images/cta/kart-1.png" alt="Özel Lezzetus" />
                        <h1>Özel<br /> Lezzetus</h1>
                        <h3>Position:Absolute Acı Burger</h3>
                        <a className="menu-button" href="#">SİPARİŞ VER</a>
                    </div>
                    <div className="second-group-menu">
                        <div className="second-menu">
                            <img src="images/iteration-2-images/cta/kart-2.png" alt="Hackathlon Burger Menu" />
                            <h2>Hackathlon <br />Burger Menü</h2>
                            <a className="menu-button" href="#">SİPARİŞ VER</a>
                        </div>
                        <div className="third-menu">
                            <img src="images/iteration-2-images/cta/kart-3.png" alt="Kurye" />
                            <h3><span className="third-menu-text">Çoooook</span> hızlı <br />npm gibi kurye</h3>
                            <a className="menu-button" href="#">SİPARİŞ VER</a>
                        </div>
                    </div>
                </div>
                <div className="menu-category">
                    <div className="menu-category-text">
                        <span>en çok paketlenen menüler</span>
                        <span>Acıktıran Kodlara Doyuran Lezzetler</span>
                    </div>
                    <div>
                        <nav className="category-nav">
                            <ul className="category-list menu-category-list">

                                <li className="category-item active category-border">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/1.svg" alt="Ramen" />
                                        <span>Ramen</span>
                                    </a>
                                </li>

                                <li className="category-item category-border-pizza">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/2.svg" alt="Pizza" />
                                        <span>Pizza</span>
                                    </a>
                                </li>

                                <li className="category-item category-border">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/3.svg" alt="Burger" />
                                        <span>Burger</span>
                                    </a>
                                </li>

                                <li className="category-item category-border">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/4.svg" alt="French fries" />
                                        <span>French fries</span>
                                    </a>
                                </li>

                                <li className="category-item category-border">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/5.svg" alt="Fast Food" />
                                        <span>Fast food</span>
                                    </a>
                                </li>

                                <li className="category-item category-border">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/6.svg" alt="Soft drinks" />
                                        <span>Soft drinks</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="products">
                    <div className="products-item">
                        <img src="./images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" />
                        <div className="products-detail">
                            <span className="item-description">Terminal Pizza</span>
                            <div className="product-meta">
                                <span className="text-gray">4.9</span>
                                <div className="price-group">
                                    <span className="text-gray">(200)</span>
                                    <span className="price">60₺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products-item">
                        <img src="./images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
                        <div className="products-detail">
                            <span className="item-description">Position Absolute Acı Pizza</span>
                            <div className="product-meta">
                                <span className="text-gray">4.9</span>
                                <div className="price-group">
                                    <span className="text-gray">(200)</span>
                                    <span className="price">60₺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products-item">
                        <img src="./images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
                        <div className="products-detail">
                            <span className="item-description">useEffect Tavuklu Burger</span>
                            <div className="product-meta">
                                <span className="text-gray">4.9</span>
                                <div className="price-group">
                                    <span className="text-gray">(200)</span>
                                    <span className="price">60₺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}