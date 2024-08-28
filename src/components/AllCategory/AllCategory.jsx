import Data from "../Data/Data";

const AllCategory = ({allData}) => {


    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-center mt-20 font-bold text-3xl">Donation Categories</h1>
            <p className="text-center text-xl mb-10">Click to see Details</p>

            <div className="flex flex-col md:grid gap-10 md:grid-cols-4 ">
            
            {
                allData.map(data => <Data data={data}></Data> )
            }




            </div>
        </div>
    );
};

export default AllCategory;