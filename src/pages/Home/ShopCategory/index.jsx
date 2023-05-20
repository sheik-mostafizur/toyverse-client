import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import toast from "react-hot-toast";
import CategoryItem from "./CategoryItem";
import {useEffect, useState} from "react";
import LoaderSpinner from "../../../components/LoaderSpinner";
import {uesAuthContext} from "../../../context/AuthContext";
import {useNavigate} from "react-router-dom";

const ShopCategory = () => {
  const navigate = useNavigate();
  const {user} = uesAuthContext();
  const [loading, setLoading] = useState(true);
  const [loadedToyData, setLoadedToyData] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleViewDetails = (_id) => {
    if (!user?.email) {
      return toast.error("Please login!");
    } else {
      navigate(`/toy/${_id}`);
    }
  };

  useEffect(() => {
    fetch("https://toyverse.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = data.reduce((accumulator, item) => {
          if (
            !accumulator.find(
              (element) => element.categories === item.categories
            )
          ) {
            accumulator.push({id: item._id, categories: item.categories});
          }
          return accumulator;
        }, []);

        setCategories(uniqueCategories);
        setLoadedToyData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-24">
      <h1 className="font-bold text-3xl md:text-5xl text-center mb-8">
        Shop by category
      </h1>

      <Tabs>
        <TabList>
          {loading ? (
            <LoaderSpinner />
          ) : (
            categories &&
            categories.map((item) => (
              <Tab key={item._id + "" + Math.random()}>
                <span className="capitalize">{item.categories}</span>
              </Tab>
            ))
          )}
        </TabList>
        {loading ? (
          <LoaderSpinner />
        ) : (
          categories.map((item) => {
            let count = 0;
            const {_id, categories} = item;
            return (
              <TabPanel key={_id + "" + Math.random()}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {loadedToyData.map((item) => {
                    if (categories === item.categories) {
                      ++count;
                      if (count > 4) return "";
                      return (
                        <CategoryItem
                          key={item._id + "" + Math.random()}
                          _id={item._id}
                          name={item.toy_name}
                          picture={item.photo_url}
                          price={item.price}
                          rating={item.rating}
                          handleViewDetails={handleViewDetails}
                        />
                      );
                    }
                  })}
                </div>
              </TabPanel>
            );
          })
        )}
      </Tabs>
    </div>
  );
};

export default ShopCategory;
