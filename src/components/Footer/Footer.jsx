import footer from "../../assets/images/logo-footer.png"
const Footer = () => {
    return (
        <div className="bg-neutral text-neutral-content py-5 px-2">
            <div className="footer footer-horizontal footer-center  max-w-300 mx-auto pb-10">
                <img src={footer} alt="Logo" className="w-20" />
            </div>

            <div className="footer sm:footer-horizontal max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-3 pb-10">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p>BPL Dream XI is your ultimate fantasy cricket companion. Build your dream squad from the best BPL talent, manage your budget, and compete like a pro. Cricket isn't just a game — it's a passion.</p>
                </nav>
                <nav className="lg:justify-self-center">
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <form className="lg:justify-self-end">
                    <h6 className="footer-title">Subscribe</h6>
                    <fieldset className="w-80">
                        <label>Subscribe to our newsletter for the latest updates.</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="p-2 join-item" />
                            <button className="footer-btn join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <footer className="footer sm:footer-horizontal footer-center">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Mahmuda Jahan</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;