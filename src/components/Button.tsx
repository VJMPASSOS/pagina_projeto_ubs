import "../styles/buttons.css";

interface IButtonProps {
  text: string;
  color: 1|2|3|4;
  href?: string; 
  onClick?: () => void;
}

export default function Button({ text, color, href,onClick }: IButtonProps) {
  const buttonClass = `btn-${color}`;
  if (href) {return (
      <a
        href={href}
        className={buttonClass}
        target="_blank" 
        rel="noopener noreferrer" 
        >
        {text}
      </a>
    );
  }
  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}