import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
function Home() {
  return (
   <>
    <div className='home' id='home'>

<main>
    <h1>TechyStar</h1>
    <p>Welcome to Techy Star, the place where you can find all your tech related</p>
</main>


</div>
<div className="home2">
    <img src={vg} alt='Graphics'/>
    <div>
        <p>
            We provide a platform for people who are interested in technology and want
            to share their knowledge with others.
        </p>
    </div>
</div>
<div className="home3" id='about'>
    <div>
        <h1>
            Who we are 
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis ex cumque fuga? Molestiae corrupti repudiandae, similique, blanditiis laudantium exercitationem praesentium sit illo voluptas nobis, ipsam veritatis minima esse cum accusamus repellendus. Ad dolorem tempora quis earum perferendis voluptatem minus atque eveniet! Itaque maiores quos, quasi enim beatae officiis.</p>
    </div>
    
</div>
<div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{animationDelay:"0.3s"}}>
<AiFillGoogleCircle/>
<p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
<AiFillAmazonCircle/>
<p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
<AiFillYoutube/>
<p>Youtube</p>
                </div>
                <div style={{animationDelay:"1s"}}>
<AiFillInstagram/>
<p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
   </>
  )
}

export default Home