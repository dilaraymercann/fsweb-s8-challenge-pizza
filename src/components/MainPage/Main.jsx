export default function Main() {
    return (
        <>
            <main>
                <nav class="category-nav">
                    <ul class="category-list">

                        <li class="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/1.svg" alt="YENİ! Kore" />
                                <span>YENİ! Kore</span>
                            </a>
                        </li>

                        <li class="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/2.svg" alt="Pizza" />
                                <span>Pizza</span>
                            </a>
                        </li>

                        <li class="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/3.svg" alt="Burger" />
                                <span>Burger</span>
                            </a>
                        </li>

                        <li class="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/4.svg" alt="Kızartmalar" />
                                <span>Kızartmalar</span>
                            </a>
                        </li>

                        <li class="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/5.svg" alt="Fast Food" />
                                <span>Fast food</span>
                            </a>
                        </li>

                        <li class="category-item">
                            <a href="#">
                                <img src="./images/iteration-2-images/icons/6.svg" alt="Gazlı İçecek" />
                                <span>Gazlı İçecek</span>
                            </a>
                        </li>

                    </ul>
                </nav>
                <div class="grouped-menu">
                    <div class="first-menu">
                        <img src="images/iteration-2-images/cta/kart-1.png" alt="Özel Lezzetus" />
                        <h1>Özel<br /> Lezzetus</h1>
                        <h3>Position:Absolute Acı Burger</h3>
                        <a class="menu-button" href="#">SİPARİŞ VER</a>
                    </div>
                    <div class="second-group-menu">
                        <div class="second-menu">
                            <img src="images/iteration-2-images/cta/kart-2.png" alt="Hackathlon Burger Menu" />
                            <h2>Hackathlon <br />Burger Menü</h2>
                            <a class="menu-button" href="#">SİPARİŞ VER</a>
                        </div>
                        <div class="third-menu">
                            <img src="images/iteration-2-images/cta/kart-3.png" alt="Kurye" />
                            <h3><span class="third-menu-text">Çoooook</span> hızlı <br />npm gibi kurye</h3>
                            <a class="menu-button" href="#">SİPARİŞ VER</a>
                        </div>
                    </div>
                </div>
                <div class="menu-category">
                    <div class="menu-category-text">
                        <span>en çok paketlenen menüler</span>
                        <span>Acıktıran Kodlara Doyuran Lezzetler</span>
                    </div>
                    <div>
                        <nav class="category-nav">
                            <ul class="category-list menu-category-list">

                                <li class="category-item active category-border">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/1.svg" alt="Ramen" />
                                        <span>Ramen</span>
                                    </a>
                                </li>

                                <li class="category-item category-border-pizza">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/2.svg" alt="Pizza" />
                                        <span>Pizza</span>
                                    </a>
                                </li>

                                <li class="category-item category-border">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/3.svg" alt="Burger" />
                                        <span>Burger</span>
                                    </a>
                                </li>

                                <li class="category-item category-border">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/4.svg" alt="French fries" />
                                        <span>French fries</span>
                                    </a>
                                </li>

                                <li class="category-item category-border">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/5.svg" alt="Fast Food" />
                                        <span>Fast food</span>
                                    </a>
                                </li>

                                <li class="category-item category-border">
                                    <a href="#">
                                        <img src="./images/iteration-2-images/icons/6.svg" alt="Soft drinks" />
                                        <span>Soft drinks</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="products">
                    <div class="products-item">
                        <img src="./images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" />
                        <div class="products-detail">
                            <span class="item-description">Terminal Pizza</span>
                            <div class="product-meta">
                                <span class="text-gray">4.9</span>
                                <div class="price-group">
                                    <span class="text-gray">(200)</span>
                                    <span class="price">60₺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="products-item">
                        <img src="./images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
                        <div class="products-detail">
                            <span class="item-description">Position Absolute Acı Pizza</span>
                            <div class="product-meta">
                                <span class="text-gray">4.9</span>
                                <div class="price-group">
                                    <span class="text-gray">(200)</span>
                                    <span class="price">60₺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="products-item">
                        <img src="./images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
                        <div class="products-detail">
                            <span class="item-description">useEffect Tavuklu Burger</span>
                            <div class="product-meta">
                                <span class="text-gray">4.9</span>
                                <div class="price-group">
                                    <span class="text-gray">(200)</span>
                                    <span class="price">60₺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}