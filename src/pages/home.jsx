import { Link } from "react-router-dom"

import Navbar from "../components/navbar"
import Footer from "../components/footer"


import './home.css'

import com1 from "../img/companies/fedex.png"
import com2 from "../img/companies/google.png"
import com3 from "../img/companies/ola.png"
import com4 from "../img/companies/minecrosoft.png"
import com5 from "../img/companies/amazon.png"
import com6 from "../img/companies/fedx.png"
import com7 from "../img/companies/walmart.png"

import img1 from '../img/img-1.png'
import img2 from '../img/img-2.png'

export default function Home() {
    return(
        <>
            <main>
                <Navbar />
                <div className="bt">
                    <div className="b">
                        <p className="head">Inspiration Technology.</p>
                        <h1 className="theme"><span className="bold">Runs faster.</span> Costs less and never breaks.</h1>
                        <div className="line"></div>
                        <p className="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat</p>
                        <div className="btn-group">
                            <Link to="" className="btn type-1">Get started</Link>
                            <Link to="" className="btn type-2">Free Trial</Link>
                        </div>
                    </div>
                    <div className="t">
                        <img src={ img1 } alt="img-1" />
                    </div>
                </div>
            </main>
            <div className="card-box">
                <div className="card-item"><img src={ com1 } alt="company-logo" /></div>
                <div className="card-item"><img src={ com2 } alt="company-logo" /></div>
                <div className="card-item"><img src={ com3 } alt="company-logo" /></div>
                <div className="card-item"><img src={ com4 } alt="company-logo" /></div>
                <div className="card-item"><img src={ com5 } alt="company-logo" /></div>
                <div className="card-item"><img src={ com6 } alt="company-logo" /></div>
                <div className="card-item"><img src={ com7 } alt="company-logo" /></div>
            </div>
            <div className="bt">
                <div className="t">
                    <img src={ img2 } alt="img-1" />
                </div>
                <div className="b">
                    <p className="head orange">Lorem ipsum dolor sit ame.</p>
                    <h1 className="theme black">Simple Solutions for Complex Connections</h1>
                    <p className="grey gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat</p>
                    <div className="btn-group">
                        <Link to="" className="btn type-1 start">Learn more</Link>
                    </div>
                </div>
            </div>
            <div className="card-box">
                <div className="card-item card-1 flex-col">
                    <h1 className="big-num">50+</h1>
                    <p className="h1-text">Happy Clients</p>
                </div>
                <div className="card-item card-1 flex-col">
                    <h1 className="big-num">550+</h1>
                    <p className="h1-text">Projects Completed</p>
                </div>
                <div className="card-item card-1 flex-col">
                    <h1 className="big-num">250</h1>
                    <p className="h1-text">Dedicated Members</p>
                </div>
                <div className="card-item card-1 flex-col">
                    <h1 className="big-num">30+</h1>
                    <p className="h1-text">Awards Won</p>
                </div>
            </div>
            <div className="pink-zone">
                <div className="flex-box">
                    <div className="flexb-1 flexb">
                        <p className="head orange">YOUR VISION, OUR FUTURE</p>
                        <h1 className="theme black">Committed to People, Committed </h1>
                        <p className="grey gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="flexb-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="blue" class="bi bi-lightbulb-fill" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/></svg>
                        <h1 className="flexb-c1">Creative Ideas</h1>
                        <h1 className="flexb-c2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </h1>
                        </div>
                    </div>
                    <div className="flexb-2 flexb">
                    <div className="flexb-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="blue" class="bi bi-lightbulb-fill" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/></svg>
                        <h1 className="flexb-c1">Creative Ideas</h1>
                        <h1 className="flexb-c2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </h1>
                        </div>
                        <div className="flexb-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="blue" class="bi bi-lightbulb-fill" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/></svg>
                        <h1 className="flexb-c1">Creative Ideas</h1>
                        <h1 className="flexb-c2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </h1>
                        </div>
                    </div>
                    <div className="flexb-3 flexb">
                    <div className="flexb-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="blue" class="bi bi-lightbulb-fill" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/></svg>
                        <h1 className="flexb-c1">Creative Ideas</h1>
                        <h1 className="flexb-c2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </h1>
                    </div>
                    <div className="flexb-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="blue" class="bi bi-lightbulb-fill" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/></svg>
                        <h1 className="flexb-c1">Creative Ideas</h1>
                        <h1 className="flexb-c2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida </h1>
                    </div>
                    </div>
                </div>
            </div>
            <div className="test">
                <h1 className="big tac black">User's Review</h1>
                <p className="med tac black">Collaborate over projects with your team and clients optimised <br /> for mobile and tablet don't let slow</p>
                <p className="med black mt100">What people say about us ?</p>
                <div className="card-box">
                    <div className="card-item flex-col p10">
                        <div>
                            <p className="bold black">David millar</p>
                            <p className="black">CEO, PParkivew int, Ltd</p>
                        </div>
                        <p className="black cur">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui doloremque aut alias ut. A, unde. Voluptatibus quis molestiae eveniet?</p>
                    </div>
                    <div className="card-item flex-col p10">
                        <div>
                            <p className="bold black">David millar</p>
                            <p className="black">CEO, PParkivew int, Ltd</p>
                        </div>
                        <p className="black cur">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui doloremque aut alias ut. A, unde. Voluptatibus quis molestiae eveniet?</p>
                    </div>
                    <div className="card-item flex-col p10">
                        <div>
                            <p className="bold black">David millar</p>
                            <p className="black">CEO, PParkivew int, Ltd</p>
                        </div>
                        <p className="black cur">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui doloremque aut alias ut. A, unde. Voluptatibus quis molestiae eveniet?</p>
                    </div>
                    <div className="card-item flex-col p10">
                        <div>
                            <p className="bold black">David millar</p>
                            <p className="black">CEO, PParkivew int, Ltd</p>
                        </div>
                        <p className="black cur">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui doloremque aut alias ut. A, unde. Voluptatibus quis molestiae eveniet?</p>
                    </div>
                    <div className="card-item flex-col p10">
                        <div>
                            <p className="bold black">David millar</p>
                            <p className="black">CEO, PParkivew int, Ltd</p>
                        </div>
                        <p className="black cur">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui doloremque aut alias ut. A, unde. Voluptatibus quis molestiae eveniet?</p>
                    </div>
                    <div className="card-item flex-col p10">
                        <div>
                            <p className="bold black">David millar</p>
                            <p className="black">CEO, PParkivew int, Ltd</p>
                        </div>
                        <p className="black cur">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui doloremque aut alias ut. A, unde. Voluptatibus quis molestiae eveniet?</p>
                    </div>
                </div>
            </div>
        </>
    )
}
