import "../styles/utility.css";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import SwipperSlide from "../components/SwipperSlide";
import { useEffect, useState } from "react";
import HeroRectangleOne from "../assets/imagens/rectangle_One.png";
import HeroRectangleTwo from "../assets/imagens/rectangle_Two.png";
import "../styles/hero.css";
import Card from "../components/Card";
import QrCode from "../assets/imagens/qrCodeZap.png";
import Logo_zap from "../assets/imagens/icons8-whatsapp-144.png";
import Loja from "../assets/imagens/lojas.png";
import "../styles/solution.css"
import PriceCard from "../components/Price-card";
import "../styles/prices.css";
import u from "../assets/imagens/logo_U.png";

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setEmail] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [mensagem, setMensagem] = useState<string>('')

    console.log(email)
    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showMobileMenu]);

    function postMethod() {
        
        console.log(mensagem+"tet")
        const requestBody = {
            myMail: email,
            myText: mensagem,
            myName: nome
        };
        fetch('api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2NzU4NDcxMzk4OTQ4MzA5MjY1IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJ2am1wYXNzb3NAbWluaGEuZmFnLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiSEV3cTg4bkdYU1hadXhmSWNVc1NsQSIsImlhdCI6MTczMjE2NTYyMywiZXhwIjoxNzMyMTY5MjIzfQ.PyuUbzszgf6_gRcrY9ENiRFR8JspBFoXG2xzODr46DtDpgGdXr5Q4d_P0mu5rSH3w2AqjwDP7fEEMaRfPW5NeReZd70k8cfFWoKMcA_Df6Qflf2AfSc3qAxWnt3gwg2zlCCv7U8ZKVOa1_4RoKLbq_aANuc9CCG4KbuPtNvtmua1ALZWtCTQasLYab9ZR2DFEo2jKvvnN64EjWnfDAmAfOBvtWx5eta6WRjdzdXKUR2i4AYIyC9QLdEFU-kooVAP_JXwz3s4oA1wKRvXxnMt-MAmH9CqDBQVE3tBX0f9nzcHwrsRABTiws4brZiUOv7i6eMj2qDt2508hRPFoLptcQ",

            },
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Falha na requisição');
                }
                return response.json();
            })
            .then(data => {
                console.log('Sucesso:', data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }

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
                            <Button text="Cadastre-se" color={1}/>
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
                        <span><Button text="Cadastre-se" color={1} /></span>
                        <span className="desktop-only">
                            <Button text="Veja Mais" color={2} />
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
                    <Card titulo="Nosso APP" text="Instale nosso aplicativo disponível para Android" imagem={Loja} />
                    <Card titulo="Entre em contato" text="Caso tiver problemas em pegar sua ficha contatenos no email" imagem={Logo_zap} />
                </div>
            </section>

            <section id="testimonials">
                <SwipperSlide />
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">

                    <PriceCard
                        plan="Unimed"
                        description="Cobertura nacional e serviços diferenciados."
                        price="R$ 350,00"
                        itemOne="Cobertura Nacional"
                        checkOne={true}
                        itemTwo="Atendimento Oncológico"
                        checkTwo={true}
                        itemThree="Descontos em Medicamentos"
                        checkThree={true}
                        link="https://www.unimednacional.coop.br/site/sua-cidade"
                        premium={false}
                    />

                    <PriceCard
                        plan="Amil"
                        description="Planos flexíveis com cobertura internacional."
                        price="R$ 160,45"
                        itemOne="Telemedicina"
                        checkOne={true}
                        itemTwo="Assistência Farmacêutica"
                        checkTwo={true}
                        itemThree="Cobertura Internacional"
                        checkThree={true}
                        link="https://institucional.amil.com.br/"
                        premium={true}
                    />

                    <PriceCard
                        plan="Bradesco Saúde"
                        description="Serviço premium e rede credenciada."
                        price="R$ 567,60"
                        itemOne="Atendimento Premium"
                        checkOne={true}
                        itemTwo="Rede Credenciada"
                        checkTwo={true}
                        itemThree="Alta Reputação"
                        checkThree={true}
                        link="https://www.bradescoseguros.com.br/clientes/produtos/plano-saude"
                        premium={false}
                    />

                </section>
            </section>

            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <h2>Entre em contato</h2>
                    <p>Preencha o formulário abaixo e entraremos em contato em breve.</p>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Digite seu nome"
                                onChange={(evento) => setNome(evento.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                                onChange={(evento) => setEmail(evento.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                                id="message"
                                placeholder="Digite sua mensagem"
                                onChange={(evento) => setMensagem(evento.target.value)}
                                required
                            ></textarea>
                        </div>
                        <Button color={1} text="Enviar" onClick={postMethod}/>
                    </form>
                </div>
            </section>

            <section id="footer">
                <div className="footer-container">
                    <img src={u} width="24" alt="Logo UbsOn" className="footer-logo" />
                    <p className="footer-tagline">
                        O futuro das Unidades Básicas de Saúde e o seu tempo!
                    </p>
                    <div className="footer-links">
                        <a href="https://www.instagram.com" target="_blank">Instagram</a>
                        <a href="https://www.facebook.com" target="_blank">Facebook</a>
                        <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
                    </div>
                    <p className="footer-address">Endereço: Rua da Piscicultura, 123 - Cascavel, PR</p>
                    <p>Email: <a href="jemolineti@minha.fag.edu.br" className="footer-email">jemolineti@minha.fag.edu.br</a></p>
                    <p className="footer-rights">© 2024 Ubson. Todos os direitos reservados.</p>
                    <div className="footer-support">
                        <p>Entre em contato com o suporte via WhatsApp</p>
                        <img src={QrCode} alt="QR Code" className="footer-qrcode" />
                        <Button text="Acesse o WhatsApp" href="https://w.app/DJv0OL" color={4}/>
                        
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <p>DEVELOPED BY VJMPASSOS®️</p>
                </div>
            </section>
        </>

    )
}