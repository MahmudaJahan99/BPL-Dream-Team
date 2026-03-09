import footer from "../../assets/images/logo-footer.png"
const Footer = () => {
    return (
        <div className="bg-neutral text-neutral-content py-5">
            <div class="footer footer-horizontal footer-center  max-w-300 mx-auto pb-10">
                <img src={footer} alt="Logo" className="w-20" />
            </div>

            <div class="footer sm:footer-horizontal max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-3 pb-10">
                <nav>
                    <h6 class="footer-title">About Us</h6>
                    <p>BPL Dream XI is your ultimate fantasy cricket companion. Build your dream squad from the best BPL talent, manage your budget, and compete like a pro. Cricket isn't just a game — it's a passion.</p>
                </nav>
                <nav className="justify-self-center">
                    <h6 class="footer-title">Quick Links</h6>
                    <a class="link link-hover">Home</a>
                    <a class="link link-hover">Services</a>
                    <a class="link link-hover">About</a>
                    <a class="link link-hover">Contact</a>
                </nav>
                <form className="justify-self-end">
                    <h6 class="footer-title">Subscribe</h6>
                    <fieldset class="w-80">
                        <label>Subscribe to our newsletter for the latest updates.</label>
                        <div class="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                class="p-2 join-item" />
                            <button className="footer-btn join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <footer class="footer sm:footer-horizontal footer-center">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Mahmuda Jahan</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;