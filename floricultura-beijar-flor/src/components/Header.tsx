import './styles/Header.css'
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";

function Header () {
    return <header id='Cabecalho'>
                <div id="informacaoAtendimento">
                    <p className='numeroContato'>Atendimento de seg. a sex. das 07:00 ás 19:00 e sáb. das 07:00 ás 18:00</p>
                    <p className='numeroContato'><BsTelephone size={"10px"} color='green'/> (51) 33300155   <FaWhatsapp style={{marginLeft:"10px"}} size={"10px"} color='green'/> (51) 9982-4008</p>
                </div>
                <div id='BarraDeBusca'>
                    <figure id="Logo">
                        <a href='/'><img src='https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fpublic%2Facdad0ff0ce297418074.png&w=1920&q=100&dpl=dpl_3BK7RwYnScGSDf54YU4ERfPxXDY7' alt="Logo da Floricultura Beija Flor"></img></a>
                    </figure>
                    <input id='BarraDePesquisa' type='text' placeholder='Pesquisar por...'></input>
                    <p id="RastreamentoDoPedido">Acompanhar seu Pedido</p>
                    <figure id='LogoCarrinhoDeCompras'><LuShoppingCart size={"32px"} color='rgb(39, 38, 38)'/></figure>
                </div>
                <div id='NavBar'>
                    
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </header>
} export default Header;