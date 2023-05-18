import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryItem from "./CategoryItem";
import {useEffect, useState} from "react";
import LoaderSpinner from "../../../components/LoaderSpinner";

const ShopCategory = () => {
  const [loading, setLoading] = useState(true);
  const [toyData, setToyData] = useState([]);
  useEffect(() => {
    fetch("toyData.json")
      .then((res) => res.json())
      .then((data) => {
        setToyData(data);
        setLoading(false);
      });
  });
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
            toyData.map(({id, title}) => <Tab key={id}>{title}</Tab>)
          )}
        </TabList>
        {loading ? (
          <LoaderSpinner />
        ) : (
          toyData.map((item) => {
            const {data, id} = item;
            return (
              <TabPanel key={id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CategoryItem
                    id={data[0].id}
                    name={data[0].name}
                    picture={data[0].picture}
                    price={data[0].price}
                    rating={data[0].rating}
                  />
                  <CategoryItem
                    id={data[1].id}
                    name={data[1].name}
                    picture={data[1].picture}
                    price={data[1].price}
                    rating={data[1].rating}
                  />
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
