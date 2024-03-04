import Banner from "./component/home/banner";
import AboutProduct from "./component/home/product";
import Card from "./component/home/card";
import Testimonial from "./component/home/testimonial";
import Tabs from "./component/home/tabs";
export default function Home() {
  return (
    <div className="top">
      <Banner />
      <Card />
      <AboutProduct />
      <Tabs />
      <Testimonial />
    </div>
  );
}
