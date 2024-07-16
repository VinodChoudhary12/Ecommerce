import Footer from "../../components/UserComponents/Footer/Footer";
import Filter from "../../components/UserComponents/Filter/Filter";
import Navbar from "../../components/UserComponents/Navbar/Navbar";
import WithLogin from "../../components/UserComponents/Navbar/WithLogIn";

function HpmePage() {
    return (<>
        <Navbar />
        <WithLogin />
        <Filter/>
        <Footer />

    </>);
}

export default HpmePage;