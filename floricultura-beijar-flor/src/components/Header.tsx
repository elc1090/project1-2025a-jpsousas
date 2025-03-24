import './styles/Header.css'
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

function Header () {
    return <header id='Cabecalho'>
                <div id="informacaoAtendimento">
                    <p className='numeroContato'>Atendimento de seg. a sex. das 07:00 ás 19:00 e sáb. das 07:00 ás 18:00</p>
                    <p className='numeroContato'><BsTelephone/> (51) 33300155    <FaWhatsapp/> (51) 9982-4008</p>
                </div>
                <div id='NavBar'></div>
                <div></div>
            </header>
} export default Header;