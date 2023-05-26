import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../productSlice";
import "./Stock.css"
import CountPrice from "../countPrice";
import Rating from "../rating";
import { AiFillStar } from "react-icons/ai"
export default function Stock() {
  const { product, filterProducts } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const fetchData = () => {
    return fetch("StockData.json")
      .then((response) => response.json())
      .then((result) => dispatch(setProduct(result)));
  }

  useEffect(() => {
    fetchData();
  }, [])
  console.log(filterProducts)
  return (
    <>
      <div className="Price_Star">
        <CountPrice />
      </div>
      <hr />
      <div className="rating_Star">
        <div className="check_Box">
          <Rating />
        </div>
        <div className="MainContainer">
          {(filterProducts?.length > 0 ? filterProducts : product)?.map((value, index) => {
            return <div key={index + 1} className="Container">
              <div className="Stock">
                <img src={value.img} alt="Products" style={{ width: "200px", height: "152px" }} />
                <div>
                  <p><a className="Link" href="#"> {value.title}</a></p>
                </div>
                <span className="about">{value.about}</span>
                <div className="Rating_Price">
                  <p>{value.price}</p>
                  <p className="rating_Box">{value.rating} <AiFillStar /></p>
                </div>
                <span>{value.discount}</span>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}