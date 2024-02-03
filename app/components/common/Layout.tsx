import Footer from "@/app/components/common/footer/Footer";

const Layout = (props) => {
    return (
        <div>
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
