import React from "react";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect } from "react";


const App = () => {
    const [country, setCountry] = useState();
    const [univ, setUniv] = useState([]);
    const getUniv = () => {
        setCountry("");
        async function getData() {
            const res = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
            console.log(res);
            setUniv(res.data);
        }
        getData();

    }

    return (
        <>
            <div className="input">
                <div className="heading" >Top Universities of different Country.</div>
                <input type="text" onChange={(e) => {
                    setCountry(e.target.value);
                }} placeholder="Enter a valid country" value={country}/>
                <button className="btn btn-outline-success text-center text-wrap" onClick={getUniv} >Submit</button>
            </div>
            <div className="main">
                <table className="table table-hover table-bordered table-responsive-md">
                    <caption>List of top universities.</caption>
                    <thead className="thead table-dark">
                        <tr>
                            <th className="th text-center" scope="col">Sl.No</th>
                            <th className="th text-center" scope="col">Country</th>
                            <th className="th text-center" scope="col">University Name</th>
                            <th className="th text-center" scope="col">Website</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            univ.map((elem, index) => {
                                return (
                                    <>
                                        <tr scope="row" key={index}>
                                            <td className="text-center">{index + 1}</td>
                                            <td className="text-center">{elem.country}</td>
                                            <td className="text-center">{elem.name}</td>
                                            <td className="text-center"><a href={elem.web_pages[0]}>{elem.web_pages[0]}</a></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default App;

// {{borderColor:"#ffa801"}}