import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";


const Home = () => {
    const user = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h2>This is Homepage</h2>
        </div>
    );
};

export default Home;