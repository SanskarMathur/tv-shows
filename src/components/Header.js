import React from "react";
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';
import searchLogo from './loupe.png';

function Header() {
    const [searchVal, setSearchVal] = React.useState('')

    const handleNameChange = (e) => {
        setSearchVal(e.target.value)
    }
    const navigate = useNavigate();

    const searchHandler = (e) => {
        navigate(`/${searchVal}`);
    }

    function logoHandler() {
        navigate('/All');
    }

    return (
        <div className="Header">
            <img src={logo} className="Header-Logo" onClick={logoHandler}></img>
            <div className="Header-Title" onClick={logoHandler}>TV Shows</div>
            <div className="search-container">
                <input type="text"
                    placeholder="Search..."
                    className="Header-search"
                    onChange={handleNameChange}
                    value={searchVal}
                />
                <button className="Search-btn" onClick={searchHandler}>
                    <img src={searchLogo} />
                </button>
            </div>

        </div>
    )
}

export default Header;