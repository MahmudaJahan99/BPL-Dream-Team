import bannerBg from "../../assets/images/bg-shadow.png"
import bannerMain from "../../assets/images/banner-main.png"
const Banner = () => {
    return (
        <div className="bg-black max-w-300 mx-auto rounded-2xl overflow-hidden my-10">
            <div className="py-5 bg-cover bg-center min-h-96 flex flex-col text-white justify-center items-center gap-5" style={{ backgroundImage: `url(${bannerBg})` }}>
                <div>
                    <img src={bannerMain} alt="Cricket bats, balls, and stumps" />
                </div>
                <h1 className="text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-xl">Beyond Boundaries Beyond Limits</p>
                <div className="border p-2 border-white rounded-2xl">
                    <button className="banner-btn ">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;