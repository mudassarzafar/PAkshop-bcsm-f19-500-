import Banner from "./Banner"
import Card from "./Card"
import Navbar from "./Navbar"
import '../style/dashboard.css';
import dslr from '../images/dslr.jpeg';
import headphone from '../images/headphone.jpeg';
import speaker from '../images/speaker.jpeg';
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
    
    <Banner/>
    <div className="card-main">
    <section className="card-container">
        <Card  imagesrc={dslr} name='DSLR CAMERA' desc='wireless' price='500$'/>
        <Card  imagesrc={headphone} name='HEADPHONE' desc='wireless' price='50$'/>
        <Card  imagesrc={speaker} name='SPEAKER' desc='wireless' price='30$'/>
        <Card  imagesrc={dslr} name='DSLR CAMERA' desc='wireless' price='50$'/>
        <Card  imagesrc={headphone} name='HEADPHONE' desc='wireless' price='50$'/>
        <Card  imagesrc={speaker} name='SPEAKER' desc='wireless' price='50$'/>
        <Card  imagesrc={dslr} name='DSLR CAMERA' desc='wireless' price='50$'/>
        <Card  imagesrc={headphone} name='HEADPHONE' desc='wireless' price='50$'/>
        <Card  imagesrc={speaker} name='SPEAKER' desc='wireless' price='50$'/>
        <Card  imagesrc={dslr} name='DSLR CAMERA' desc='wireless' price='50$'/>
        <Card  imagesrc={headphone} name='HEADPHONE' desc='wireless' price='50$'/>
        <Card  imagesrc={speaker} name='SPEAKER' desc='wireless' price='50$'/>
    </section>
    </div>
    <Footer/>
        </>
  )
}
export default Dashboard