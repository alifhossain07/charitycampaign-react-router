

const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
            <div>
                <img className="w-64" src="/asset/images/logo.png" alt="" />
                <h1 className="text-3xl font-bold "><span className="text-red-600">Charity</span>Campaign</h1>
            </div>
  <aside>
    <p className="text-lg">Copyright © {new Date().getFullYear()} - All right reserved by Alif Hossain</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;