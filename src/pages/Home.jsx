import React from "react";
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return(
    <>
    <h1>Welcome Screen</h1>
    <button onClick={() => navigate('todo')}>Redirect to Todo</button>
    </>
    )
}

export default Home;