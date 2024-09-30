import Image from "next/image";


const About = () => {
        return (
            <div className="text-slate-900 h-screen mt-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative mr-8">
                            <Image src={'/assets/images/about_us/person.jpg'} width={600} height={600} alt="" className=""/>
                            <Image src={'/assets/images/about_us/parts.jpg'} width={400} height={400} alt="" className="absolute right-5 top-1/2 border-8 border-white" />
                        </div>
                        <div className="">
                        <h3 className="text-3xl font-bold text-orange-600">About Us</h3>
                    <h1 className="text-5xl font-bold my-8">We are qualified & of experience in this field</h1>
                    <p className="">
                    "Expert technicians diagnose and repair vehicles with precision, using state-of-the-art tools and genuine parts to ensure safe and reliable performance. From routine maintenance to complex overhauls, our team provides personalized service, transparent estimates,getting you back on the road quickly and confidently."
                    </p>
                    <p className="mt-6">"Trust our expert technicians for precise diagnoses and repairs using state-of-the-art tools and genuine parts, ensuring safe and reliable performance, with personalized service and transparent estimates."</p>
                    <button className="btn btn-primary mt-16">Get More Info</button> 
                        </div>
                    </div>
                </div>
       </div>
    );
};

export default About