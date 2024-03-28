import Footer from "@/app/components/common/footer/Footer";
import {ReactNode} from "react";

type LayoutProps = {
    children?: ReactNode,
    isMaxWidth:boolean
}
const Layout = ({children,isMaxWidth=true}:LayoutProps) => {
    return (
        <div>
            <div style={{maxWidth: isMaxWidth && 480, margin: '0 auto'}}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
