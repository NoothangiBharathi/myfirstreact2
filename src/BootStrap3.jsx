
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function BootStrap3() {
    const [data, setData] = useState([]);

    
    useEffect(() => {
        fetchData();
    }, []);

    
    const fetchData = async () => {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        setData(data);
    };

    return (
        <div className="container">
            <h1 style={{ fontSize: "35px" }}>Jewelry Collection</h1>
            <div className="row">
                {
                    data.map((item, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img 
                                    src={item.image} 
                                    className="card-img-top" 
                                    alt={item.title} 
                                    style={{ width: "100px", height: "100px", objectFit: "cover", margin: "0 auto" }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.category}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BootStrap3;
