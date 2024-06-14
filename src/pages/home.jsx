import Hero from "../components/Hero/Hero"
import Kategori from "../components/Kategori/Kategoris"
import Contents from "../components/Content/Contents"
import CampaignDetail from "../components/Campaign/CampaignDetail"

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Kategori />
            <Contents />
            <div className="flex items-center justify-center pt-10">
                <div className="text-center">
                    <h1 className="text-primary font-bold text-4xl pb-3">Campaign</h1>
                    <p className="text-tertiary sm:text-sm">Mari kita bersama-sama ciptakan masa depan pariwisata yang lebih berkelanjutan!</p>
                </div>
            </div>
            <CampaignDetail />
        </div>
    )
}

export default Home