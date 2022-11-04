import Search from "../Components/Search";
import Filter from "../Components/Filter";

const Home = () => {
    return (
        <section className="mt-12 px-4">
            <div className="flex flex-col gap-8 md:justify-between">
                <Search />
                <Filter />
            </div>
        </section>
    );
}

export default Home;
