import Search from "../Components/Search";
import Filter from "../Components/Filter";
import Countries from "../Components/Countires/Countries";

const Home = () => {
    return (
        <section className="mt-12 px-4 pb-11 max-w-[640px] md:max-w-[820px] lg:max-w-[1040px] mx-auto">
            <div className="flex flex-col gap-8 md:justify-between md:flex-row">
                <Search />
                <Filter />
            </div>
            <Countries />
        </section>
    );
}

export default Home;
