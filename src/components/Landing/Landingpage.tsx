import Features from "./Features";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import FooterComponent from "./Footer";

export default function Landing  (){
    return(
        <div>
            <div>
                <Hero/>
                <Features/>
                <Testimonial/>
                <FooterComponent/>
            </div>
        </div>
    )
}