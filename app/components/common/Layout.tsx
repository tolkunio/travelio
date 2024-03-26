import Footer from "@/app/components/common/footer/Footer";
import {ReactNode} from "react";

type LayoutProps = {
    children?: ReactNode
}
const Layout = ({children}:LayoutProps) => {
    return (
        <div>
            <div style={{maxWidth: 480, margin: '0 auto'}}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
