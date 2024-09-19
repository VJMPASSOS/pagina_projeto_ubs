import "../styles/buttons.css"

interface ICardProps {
    titulo: string;
    text: string;
}

export default function Button({titulo, text }: ICardProps) {
    return (
        <div className="card">
        <h2>{titulo}</h2>
        <p>{text}</p>
        </div>
    )
}