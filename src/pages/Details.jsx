import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [select, setSelect] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setProduct(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  function handleAdd() {
    if (!product) return;
    const phone = {
      id: product.id,
      title: product.attributes.title,
      price: product.attributes.price,
      image: product.attributes.image,
      count: parseInt(select, 10),
    };
    dispatch(add(phone));
    navigate("/cart");
  }
  
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-[50px]">
        {product ? (
          <div className="card bg-base-100 flex flex-row w-[600px] p-6 gap-2 shadow-xl mx-auto">
            <div className="img">
              <img
                src={product.attributes.image}
                alt={product.attributes.title}
                className="w-[250px] rounded-md cover"
              />
            </div>
            <div className="info">
              <div className="card-body w-[400px]">
                <h2 className="card-title text-xl">{product.attributes.title}</h2>
                <p className="text-gray-700 text-xl">
                  ${product.attributes.price}
                </p>
                <p>{product.attributes.description}</p>
              </div>
              <select
                className="w-full border p-[8px] rounded-md mt-[20px] mb-5"
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <button
                className="btn w-full p-[12px] bg-blue-500 text-white rounded-md"
                onClick={handleAdd}
              >
                Add to bag
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading product...</p>
        )}
      </div>
    </div>
  );
}

export default Details;