import React from "react";
import banner from '/images/more/3.png';
import bannerHeaderBg from '/images/more/15.jpg';
import logo from '/images/more/logo1.png'

function Banner() {
    return (<>

        <div className="font-rancho">
            {/* Banner Section */}
            <div
                className="bg-cover bg-center h-[600px] relative flex items-center justify-end text-white  bg-[rgba(227, 181, 119, 1)]"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >
                <div className="bg-cover absolute top-0 bg-center h-[100px] w-full flex items-center justify-center"
                    style={{ backgroundImage: `url(${bannerHeaderBg})` }}
                >
                    <img className="w-20" src={logo} alt="Espresso Emporium" />
                    <h1 className="text-2xl md:text-4xl lg:text-6xl">Espresso Emporium</h1>
                </div>
                <div className=" hover:bg-black border border-white border-opacity-10 hover:border-opacity-80 hover:bg-opacity-50 py-10 px-4 rounded-lg 
                                max-w-3xl relative transition duration-300 mr-2 hover:backdrop-blur-lg hover:shadow-lg filter group">
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-base-300 font-bold mb-4 group-hover:text-custom-yellow transition duration-300">
                        Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className="mb-6 text-base-300 group-hover:text-custom-yellow transition duration-300">
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of
                        every moment!!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <button className="bg-custom-yellow hover:bg-black hover:bg-opacity-50 hover:text-custom-yellow text-black py-2 px-6 rounded btn transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-400 py-12">
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "☕",
                                title: "Awesome Aroma",
                                description:
                                    "You will definitely be a fan of the design & aroma of your coffee.",
                            },
                            {
                                icon: "🌟",
                                title: "High Quality",
                                description:
                                    "We served the coffee to you maintaining the best quality.",
                            },
                            {
                                icon: "✔️",
                                title: "Pure Grades",
                                description:
                                    "The coffee is made of the green coffee beans which you will love.",
                            },
                            {
                                icon: "🔥",
                                title: "Proper Roasting",
                                description:
                                    "Your coffee is brewed by best roasting the green coffee beans.",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white shadow-md rounded-lg text-center transition-colors hover:text-custom-yellow"
                            >
                                <div className="hover:px-8 transition duration-300">
                                    <div className="text-4xl mb-4 hover:text-custom-yellow">{feature.icon}</div>
                                    <h4 className="font-bold text-xl mb-2 hover:text-custom-yellow">{feature.title}</h4>
                                    <p className="text-gray-600 hover:text-custom-yellow">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Banner;
