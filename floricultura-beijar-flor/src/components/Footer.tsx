import './styles/Footer.css'
function Footer (){
    return <footer className="Footer">
                <div className="ContainerFooter">
                    <div className="FooterContent">
                        <section className="FooterSection">
                            <p className='TituloSecaoFooter'>Categorias</p>
                            <ul>
                                {["Box", "Café", "Campo", "Cervejas", "Cestas", "Chocolates", "Combo", "Espumante", "Fúnebre Coroa", "Girassóis", "Planta", "Rosa Colorida", "Rosa Vermelha", "Vinho"].map((categoria) => (
                                    <li>{categoria}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="FooterSection">
                            <p className='TituloSecaoFooter'>Páginas</p>
                            <ul>
                                {["Acompanhar meu Pedido", "Trocas e Devoluções", "Entregas", "Alvorada", "Porto Alegre", "Canoas", "Esteio", "Sapucaia do Sul", "São Leopoldo", "Novo Hamburgo", "Gravataí", "Cachoeirinha", "Eldorado do Sul", "Guaíba"].map((pagina) => (
                                    <li> {pagina}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="FooterSection">
                            <p className='TituloSecaoFooter'>Pagamentos</p>
                            <div className="PaymentMethods">
                                <img src={"https://www.yumi-flor.com.br/_next/image?url=%2Fimages%2Fpayment-methods.png&w=384&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP"} alt={"formas de pagamentos"} />
                            </div>

                            <p className='TituloSecaoFooter'>Plataforma E-commerce</p>
                            <div className="EcommercePlatform">
                                <img src="https://www.yumi-flor.com.br/_next/image?url=%2Fimages%2Flogo-eflorista.png&w=96&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP" alt='imagem plataforma desenvolvedora'/>
                                <br/>
                                <img src='https://www.yumi-flor.com.br/_next/image?url=%2Fimages%2Fsiteseguro.png&w=128&q=100&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP' alt='imagem certificado SSL'/>
                            </div>
                        </section>
                    </div>
                    
                    
                </div>
                <div style={{width: "100%", backgroundColor: "#feedf3", alignItems: "center"}}>
                    <div className="FooterBottom">
                        <div className='TextoFooter' id='TextoEndereco'>
                            Protásio Alves, nº 1987, Loja Petrópolis - Porto Alegre/RS<br />
                            CNPJ n.º 97.197.818/0001-88<br />
                            Email: telebeijaflor@gmail.com
                        </div>
                        <div style={{textAlign:"center"}}>
                            <p className='TextoFooter' id="TextoCopyright">Copyright &copy; Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
} export default Footer;