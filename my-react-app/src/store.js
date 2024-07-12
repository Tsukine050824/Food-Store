const Header = () => (
    <header>
        <div className="logo">
            <h1>Food Store</h1>
        </div>
        <div className="search">
            <span className="material-symbols-outlined">search</span>
            <input className="search-input" type="search" placeholder="Search..."/>
        </div>
        <nav>
            <ul>
                <li><a href="trangchu.html">Home</a></li>
                <li><a href="fast-food.html">Shop</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="giohang.html">Cart</a></li>
            </ul>
        </nav>
    </header>
);

const Product = ({ name, imgSrc, price, link }) => (
    <article className="product-item">
        <img src={imgSrc} alt={`${name} Image`} />
        <h2>{name}</h2>
        <p className="price">${price}</p>
        <a href={link}><button>Detail</button></a>
    </article>
);

const ProductList = () => (
    <section className="product-list">
        <Product name="Banana and Strawberry Cake" imgSrc="image/dessert/Banana and Strawberry Cake.png" price="39.99" link="food1.html" />
        <Product name="Black Raspberry Cake" imgSrc="image/dessert/Black Raspberry Cake.png" price="19.99" link="food2.html" />
        <Product name="Chocolate Pudding" imgSrc="image/dessert/Chocolate Pudding.png" price="29.99" link="food3.html" />
        <Product name="Cream Syrup" imgSrc="image/dessert/Cream Syrup.png" price="39.99" link="food4.html" />
        <Product name="Cupcake" imgSrc="image/dessert/Cupcake.png" price="39.99" link="food5.html" />
        <Product name="Donut" imgSrc="image/dessert/Donut.png" price="39.99" link="food6.html" />
        <Product name="Layered Cake" imgSrc="image/dessert/Layered Cake.png" price="39.99" link="food7.html" />
        <Product name="Macaron" imgSrc="image/dessert/Macaron.png" price="39.99" link="food8.html" />
        <Product name="Strawberry Chocolate Cake" imgSrc="image/dessert/Strawberry Chocolate Cake.png" price="39.99" link="food9.html" />
        <Product name="Strawberry Crepe" imgSrc="image/dessert/Strawberry Crepe.png" price="39.99" link="food10.html" />
    </section>
);

const Bar = () => (
    <div className="bar">
        <a href="fruit.html" className="bar-item button fruit">Fruit</a>
        <a href="fast-food.html" className="bar-item button fast-food">Fast-Food</a>
        <a href="dessert.html" className="bar-item button dessert">Dessert</a>
    </div>
);

const Footer = () => (
    <footer>
        <div id="contact">
            <div className="contact-us">
                <h2>Contact us</h2>
                <ul className="contact-list">
                    <li>Email: foodstore@gmail.com</li>
                    <li>Facebook: Foodstore</li>
                    <li>Zalo: 19001000</li>
                    <li>Instagram: FoodStoreVN</li>
                </ul>
            </div>
            <div className="download">
                <h2>Download Now</h2>
                <a href="#"><img src="image/app_store.jpg" alt="App Store"/></a>
                <a href="#"><img src="image/google_play.jpg" alt="Google Play"/></a>
            </div>
            <div className="faq">
                <h2>Support</h2>
                <ul className="faq-list">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Support Center</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">About FoodStore</a></li>
                </ul>
            </div>
        </div>
    </footer>
);

const App = () => (
    <div className="content">
        <Header />
        <main>
            <Bar />
            <ProductList />
        </main>
        <Footer />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
