// HomePage is simply just the Navigation page it has nothing to do with the home page

import { Outlet } from "react-router-dom";
import './HomePage.styles.scss'

import Directory from "../../components/directory/directory.component";


const HomePage = () => {
    return (
        <div className="homepage">
            <Directory/>
            <Outlet/>
        </div>
    )
}

export default HomePage;