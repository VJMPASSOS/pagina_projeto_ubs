import "../styles/cards.css";

interface ICardProps {
    titulo: string;
    text: string;
    imagem: string;
}

export default function Card({ titulo, text, imagem }: ICardProps) {
    return (
        <div className="crd">
            <h2>{titulo}</h2>
            <p>{text}</p>
            <img src={imagem} alt="Imagem" />
        </div>
    );
}