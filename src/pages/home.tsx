import "../styles/utility.css";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import HeroRectangleOne from "../assets/imagens/rectangle_One.png";
import HeroRectangleTwo from "../assets/imagens/rectangle_Two.png";
import "../styles/hero.css";
import Card from "../components/Card";
import QrCode from "../assets/imagens/qrCodeZap.png";
import Logo_zap from "../assets/imagens/icons8-whatsapp-144.png";
import Loja from "../assets/imagens/lojas.png";
import "../styles/solution.css"

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add('no-scroll');  
        } else {
            document.body.classList.remove('no-scroll');  
        }
        console.log("Minha nossa, nossa, nooooossa");
    }, [showMobileMenu]);
    return (
        <>
        
            <header className="container py-sm">

                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>

                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>


                </nav>


            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">Olá</p>
                    <h1>
                        Use já a UbsOn!
                    </h1>
                    <p>
                        Use nossa plataforma e agilize sua consulta.
                    </p>
                    <div className="flex gap-1.5">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja Mais" secondary />
                        </span>
                    </div>
                </div>
            </section>


            <section id="solution" > 

                <div className="know_us">
                    <h1>Conheça-nos</h1>
                    <p>Somos legais</p>
                </div>

                <div className="cards">
                    <Card titulo="Nosso APP" text="Instale nosso aplicativo disponível para Android" imagem={Loja}/>
                    <Card titulo="Entre em contato" text="Caso tiver problemas em pegar sua ficha contatenos no email" imagem={Logo_zap}/>
                </div>

                <div className="support">
                    <p>Entre em contato com o suporte via whatsapp</p>
                    <img src={QrCode} alt="qrcode" />
                    <link rel="linkzap" href="https://w.app/DJv0OL" />
                </div>
                        <div>
                            <p>DEVELOPED BY VJMPASSOS®️</p>
                        </div>
            </section>
        </>

    )
}