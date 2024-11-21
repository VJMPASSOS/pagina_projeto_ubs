import Button from "./Button";
import Check from "../assets/check.svg";
import UnCheck from "../assets/uncheck.svg";
import "../styles/prices.css";

interface IPriceCardProps {
    plan: string;
    description: string;
    price: string;
    itemOne: string;
    checkOne: true;
    itemTwo: string;
    checkTwo: true;
    itemThree: string;
    checkThree: true;
    link: string;
    premium: boolean;
}

export default function PriceCard({ plan, description, price, itemOne, itemThree, itemTwo, checkOne, checkThree, checkTwo, link,premium }: IPriceCardProps) {


    return premium?(
        <div className="pricing-premium-card">
            <span className="card-info">
                <p>MAIS ACESSADO</p>
            </span>
            <span className="plan">
                <h3>{plan}</h3>
                <p>{description}</p>
            </span>
            <p>A partir de</p>
            <div className="mensalidade">
                <h2>{price}</h2>
                <p>/mês</p>
            </div>
            <Button text="Conheça nosso site" color={3} key="free" href={link} />
            <span className="hr" />
            <ul className="features">
                <li>
                    <img src={checkOne ? Check : UnCheck} alt="ícone check" width={24} height={24} />
                    <p>{itemOne}</p>
                </li>
                <li>
                    <img src={checkTwo ? Check : UnCheck} alt="ícone check" width={24} height={24} />
                    <p>{itemTwo}</p>
                </li>
                <li>
                    <img src={checkThree ? Check : UnCheck} alt="ícone check" width={24} height={24} />
                    <p>{itemThree}</p>
                </li>
            </ul>
        </div>
    ): (
        <div className="pricing-card">
        <span className="plan">
            <h3>{plan}</h3>
            <p>{description}</p>
        </span>
        <p>A partir de</p>
        <div className="mensalidade">
            <h2>{price}</h2>
            <p>/mês</p>
        </div>
        <Button text="Conheça nosso site" color={3} key="free" href={link} />
        <span className="hr" />
        <ul className="features">
            <li>
                <img src={checkOne ? Check : UnCheck} alt="ícone check" width={24} height={24} />
                <p>{itemOne}</p>
            </li>
            <li>
                <img src={checkTwo ? Check : UnCheck} alt="ícone check" width={24} height={24} />
                <p>{itemTwo}</p>
            </li>
            <li>
                <img src={checkThree ? Check : UnCheck} alt="ícone check" width={24} height={24} />
                <p>{itemThree}</p>
            </li>
        </ul>
    </div>)
}