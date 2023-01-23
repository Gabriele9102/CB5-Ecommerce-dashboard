
import Navbar from './../../components/navbar/Navbar';
const LayoutWrapper = ({children}) => {

    return (
        <div className="LayoutWrapper">
        
        <Navbar />
        {children}
        
        </div>
    )
}

export default LayoutWrapper;