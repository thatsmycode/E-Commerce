import './home.css'
import {Link} from "react-router-dom";

const Home = () =>{
return (
<>
<div id="new-arrivals">
<p>New Arrivals</p>
<img src="../public/images/home-image.png" alt="home-image"/>
</div>
<div id="home-btn">
<Link to={`/store`}> <button className='btn'>Go to Sto</button> </Link>
</div>

<div id="coming-events">
    <div className="carousel-container">
        <p>Coming events</p>
        <img src="../public/images/event1" alt="event1" className="carousel-item" />
        <p>Coldplay Plaza Catalunya</p>
        <img src="../public/images/event2" alt="event2" className="carousel-item" />
        <p>The Eyes Rock Bar</p>
        <img src="../public/images/event3" alt="event3" className="carousel-item" />
        <p>Los Soprano Razzmatazz</p>
        <img src="../public/images/event4" alt="event4" className="carousel-item" />
    </div>
</div>


<div id="home-footer">
<h3>A new way of exploring Music</h3>
<h4>Your one-stop destination for all things music and style. Discover an exciting world of music merchandising where your favorite artists and bands come to life on tees, vinyl records, and exclusive fashion collaborations.</h4>
</div>
</>
)}

export default Home;