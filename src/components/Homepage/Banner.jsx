import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="carousel w-full mt-12 ">
                {banners.map((banner, index) => (
                    <div
                    style={{
                        backgroundImage: `linear-gradient(45deg, rgba(7,25,82, 0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`,
                    }}
                        key={index}
                        id={`slide${index+1}`}
                        className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat rounded-md"
                    >
                        <div className='h-full w-full flex items-center pl-36'>
                            <div className="space-y-6">
                            <h1 className='text-white text-5xl font-bold'>{banner.title}</h1>
                            <p>{banner.description}</p>
                            <button className='btn btn-primary mr-4'>Discover More</button>
                            <button className='btn btn-primary btn-outline'>Latest Project</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform bottom-12 right-12">
                        <a href={banner.prev} className="btn btn-circle bg-white/20 mr-6">
                        <GoArrowLeft className="text-bold text-lg" />
                            </a>
                            <a href={banner.next} className=" btn-circle btn btn-primary">
                            <GoArrowRight className="text-bold text-lg" />
                            </a>
                        </div>
                    </div>
                ))
                }

            </div>
        </div>
    );
};

const banners = [
    {
        title: "Affordable Price For Car Servicing",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur at quaerat nihil, repudiandae molestiae et!",
        next: "#slide2",
        prev: "#slide4",
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur at quaerat nihil, repudiandae molestiae et!",
        next: "#slide3",
        prev: "#slide1",
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur at quaerat nihil, repudiandae molestiae et!",
        next: "#slide4",
        prev: "#slide2",
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur at quaerat nihil, repudiandae molestiae et!",
        next: "#slide1",
        prev: "#slide3",
    },
]


export default Banner