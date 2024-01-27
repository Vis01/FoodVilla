import { useEffect, useState } from "react";
import Simmer from "./simmer";
import Ratingicon from "../utills/icons/Rating.svg";
import Dish from "./Dish";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const {resid}=useParams();

  useEffect(() => {
    fetchData();
  }, []);
  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json?.data?.cards);
   
    //console.log(resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  };
  console.log(resid)
  

 if(resInfo?.length === 0) return ( <Simmer />)
 const dishitems=resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
 console.log(dishitems)
 const {name,cuisines,areaName,avgRatingString,totalRatingsString}=resInfo[0]?.card?.card?.info;
  return  (
    <div className="mt-10  flex-col items-center justify-center ">
      <div name=" forth container" className="flex justify-center mx-24">
            <div className="flex-col ">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    {name}
                  </h2>
                  <h3 className="text-">
                    {" "}
                    {cuisines.join(",")}
                  </h3>
                  <h4>{areaName}</h4>
                </div>
                <div className="">
                  <div className="border flex justify-center ">
                    {avgRatingString}
                    <img className="w-4" src={Ratingicon}></img>
                  </div>
                  <div className="border ">
                    {totalRatingsString}
                  </div>
                </div>
          </div>
          <div name="second contsainer" className=" flex border-dotted border-b-2 border-sky-200">
               {/* // <h1>{resInfo[0]?.card?.card?.info?.expectationNotifiers[0]?.text}</h1> */}
          </div>

          <div name="third container" className="flex justify-center mx-24">
            <div>delivery time</div>
            <div>cost of two</div>
          </div>

          {dishitems?.map((dish) => (
            <Dish key={dish?.card?.info?.id} dishdata={dish?.card?.info} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RestaurentMenu;
