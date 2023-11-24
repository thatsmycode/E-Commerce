import './home.css'
import {Link} from "react-router-dom";

const Home = () =>{
return (
<>
<div id="new-arrivals">
<p>New Arrivals</p>
<div id="home-img">
{/* <img src="../public/images/home-image.png" alt="home-image"/> */}
</div>
<div id="home-btn">
<Link className="link-btn" to={`/store`}> <button className='btn link-btn'>Go to Store</button> </Link>
</div>
</div>



<div id="coming-events">
    <p>Coming events</p>
</div>
<div id="carousel-container">
       <div>
        <img src="../public/images/event8.png" alt="event4" className="carousel-item" />
       <p>New Years Eve 2024 Ironhack Private Party</p>
       </div>
       <div>
        <img src="../public/images/event7.png" alt="event4" className="carousel-item" />
       <p>2manydjs + Soulwax - Space Ibiza </p>
       </div>
       <div>
        <img src="../public/images/event6.png" alt="event4" className="carousel-item" />
       <p>John Talabot - Apolo Barcelona</p>
       </div>
       <div>
        <img src="../public/images/event5.png" alt="event4" className="carousel-item" />
       <p>El Dirty VS Mandanga - Razzmatazz Clubs</p>
       </div>
        <div>
        <img src="../public/images/event1.png" alt="event1" className="carousel-item" />
        <p>Coldplay Plaza Catalunya</p>
        </div>
       <div>
        <img src="../public/images/event4.jpg" alt="event4" className="carousel-item" />
       <p>Dj SeinFiled - SoundEat </p>
       </div>
        <div>
        <img src="../public/images/event2.png" alt="event2" className="carousel-item" />
        <p>The Eyes Rock Bar</p>
        </div>
        <div>
        <img src="../public/images/event3.png" alt="event3" className="carousel-item" />
       <p>Los Soprano Razzmatazz</p>
       </div>
</div>


<div id="home-footer">
<h3>A new way of exploring Music</h3>
<p>Your one-stop destination for all things music and style. Discover an exciting world of music merchandising where your favorite artists and bands come to life on tees, vinyl records, and exclusive fashion collaborations.</p>
</div>
</>
)}

export default Home;