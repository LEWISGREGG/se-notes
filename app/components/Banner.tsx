"use client"
function Banner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-2 justify-between font-medium px-10 py-5 mb-10 max-w-7xl mx-auto">
        <div> 
        <h1 className="text-3xl font-extrabold">SE Notes</h1>
        <p className="mt-5 md:mt-2 text-gray-800  dark:text-gray-100 max-w-sm">Important Formulas</p>
        </div><h2 className="mt-5 md:mt-0 font-extrabold">Structural Engineering {" "}
        <span className="text-red-600 font-bold">notes</span>{" "}
        that help in daily engineering life
        </h2>
        </div>
    );
}
export default Banner