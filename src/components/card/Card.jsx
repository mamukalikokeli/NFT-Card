import Equilibrium from "/images/image-equilibrium.jpg"
import Etherium from "/images/icon-ethereum.svg"
import Clock from "/images/icon-clock.svg"
import Avatar from "/images/image-avatar.png"
import "./card.css"

export default function Card(){
    return (
    <div className="container">
        <img src={Equilibrium} alt="equilibrium photo" className="equilibrium" />
        <h1 className="title">Equilibrium #3429</h1>
        <p className="text">Our Equilibrium collection promotes balance and calm.</p>
        <div className="info-container">
            <div className="eth">
                <img src={Clock} alt="ethereum icon" />
                <span>0.0041 ETH</span>
            </div>
            <div className="clock">
                <img src={Etherium} alt="clock icon" />
                <span>3 days left</span>
                
            </div>
        </div>
        <div className="avatar">
            <img src={Avatar} alt="avatar image" />
            <p>creation of<span>Jules Wywern</span></p>
        </div>
    </div>
    );
}