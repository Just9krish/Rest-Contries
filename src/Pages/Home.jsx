import { useState } from "react";
import Search from "../Components/Search";
import Filter from "../Components/Filter";
import Countries from "../Components/Countires/Countries";

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [keyword, setKeyword] = useState(null);

  console.log(keyword);

  return (
    <section className="mt-12 px-6 pb-11 max-w-[640px] md:max-w-[820px] lg:max-w-[1040px] mx-auto">
      <div className="flex flex-col gap-8 md:justify-between md:flex-row">
        <Search keyword={keyword} setKeyword={setKeyword} />
        <Filter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      <Countries keyword={keyword} region={selectedRegion}/>
    </section>
  );
};

export default Home;
