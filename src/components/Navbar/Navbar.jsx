import logo from "../../assets/images/logo.png"
import coin from "../../assets/images/dollar_1.png"

const Navbar = ({ balance }) => {
    return (
        <div>
            <div className="navbar max-w-300 mx-auto flex justify-between px-2">
                <div >
                    <img src={logo} alt="Logo" />
                </div>

                <button className="btn btn-ghost">
                    <span>{balance}</span>
                    <span> Coin</span>
                    <img src={coin} alt="Coin" />
                </button>

            </div>
        </div>
    );
};

export default Navbar;