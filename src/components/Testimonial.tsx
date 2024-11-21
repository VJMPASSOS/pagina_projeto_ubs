import Star from "../assets/star.svg";
import StarOuter from "../assets/starOuter.svg";
import "../styles/testimonial.css";
interface ITestimonialProps{
    img: string;
    text:string;
    stars: number;
    name: string;
    position:string;
}

export default function Testimonial({img, text,stars,name,position}:ITestimonialProps) {
    var star1 = StarOuter;
    var star2 = StarOuter;
    var star3 = StarOuter;
    var star4 = StarOuter;
    var star5 = StarOuter;

    const estrelas=(star: number)=>{

        if(star>=1){
            star1 = Star;
        }
        if (star>=2) {
            star2 = Star;
        }
        if(star>=3){
            star3 = Star;
        }
        if (star>=4) {
            star4 = Star;
        }
        if(star>=5){
            star5 = Star;
        }
    };

    estrelas(stars);

    return (
                        <div className="carousel-card" >
                            <div className="quadro-img">
                                <img src={img} alt="Imagem perfil cliente" />
                            </div>
                            <span className="testimony">
                            <p>
                                    {text}
                                </p>
                            </span>
                            <span className="rating">
                                <img src={star1} alt="ícone estrela" width={25} height={25} />
                                <img src={star2} alt="ícone estrela" width={25} height={25} />
                                <img src={star3} alt="ícone estrela" width={25} height={25} />
                                <img src={star4} alt="ícone estrela" width={25} height={25} />
                                <img src={star5} alt="ícone estrela" width={25} height={25} />
                            </span>
                            <span className="names">
                                <h3 className="name">{name}</h3>
                                <p className="position">{position}</p>
                            </span>
                        </div>

    )

}