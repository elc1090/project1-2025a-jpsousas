import './styles/Header.css'
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FadeMenu from './commons/DropdownButton';

  //metodos pra sobrescrever o estilo padrao dos botoes e aceitar customizados
declare module '@mui/material/styles' {
    interface Palette {
      pinkish: Palette['primary'];
    }
  
    interface PaletteOptions {
      pinkish?: PaletteOptions['primary'];
    }
}
  //metodos pra sobrescrever o estilo padrao dos botoes e aceitar customizados
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      pinkish: true;
    }
}
  
const theme = createTheme({
    palette: {
      pinkish: {
        main: '#FFFFFF',
        light:'rgb(148, 16, 16)',
        dark: '#A52C55',
      },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "text",
                color: "pinkish",
                sx: {
                    textTransform: "capitalize",
                    borderRadius: 0,
                    ":hover": {
                        backgroundColor: "#800f34",
                    },
                },
                
            },
        },
    },
});

function Header () {
    

    return <header id='Cabecalho'>
            <ThemeProvider theme={theme}>
                <section id="informacaoAtendimento">
                    <p className='numeroContato'>Atendimento de seg. a sex. das 07:00 ás 19:00 e sáb. das 07:00 ás 18:00</p>
                    <p className='numeroContato'><BsTelephone size={"10px"} color='green'/> (51) 33300155   <FaWhatsapp style={{marginLeft:"10px"}} size={"10px"} color='green'/> (51) 9982-4008</p>
                </section>
                <section id='CabecalhoMain'>
                    <figure id="Logo">
                        <a href='/'><img src='https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fpublic%2Facdad0ff0ce297418074.png&w=1920&q=100&dpl=dpl_3BK7RwYnScGSDf54YU4ERfPxXDY7' alt="Logo da Floricultura Beija Flor"></img></a>
                    </figure>
                    <input id='BarraDePesquisa' type='text' placeholder='Pesquisar por...'></input>
                    <p id="RastreamentoDoPedido">Acompanhar seu Pedido</p>
                    <figure id='LogoCarrinhoDeCompras'><LuShoppingCart size={"32px"} color='rgb(39, 38, 38)'/></figure>
                </section>
                <section id='NavBarContainer'>
                    <div id="NavBarConteudo">
                        <ButtonGroup id="NavBarBotoesItens">
                            <Button className='botaoNavBar' variant='text' color='pinkish'>
                                <p className='TextoBotaoNavBar'>Início</p>
                            </Button>
                            <Button className='botaoNavBar' variant='text' color='pinkish'>
                                <p className='TextoBotaoNavBar'>Box</p>
                            </Button>
                            <Button className='botaoNavBar' variant='text' color='pinkish'>
                                <p className='TextoBotaoNavBar'>Campo</p>
                            </Button>
                            <FadeMenu buttonLabel={'Cestas'} menuItems={["Cervejas","Espumante","Vinho","Café","Chocolates"]} bgColor={''} hoveredBgColor={'#800f34'} height={36}/>
                            <Button className='botaoNavBar' variant='text' color='pinkish'>
                                <p className='TextoBotaoNavBar'>Combo</p>
                            </Button>
                            <Button className='botaoNavBar' variant='text' color='pinkish'>
                                <p className='TextoBotaoNavBar'>Fúnebre Coroa</p>
                            </Button>
                            <Button className='botaoNavBar' variant='text' color='pinkish'>
                                <p className='TextoBotaoNavBar'>Girassóis</p>
                            </Button>
                            <Button className='botaoNavBar' variant='text' color='pinkish'>
                                <p className='TextoBotaoNavBar'>Planta</p>
                            </Button>
                            <Button className='botaoNavBar' variant='text' color='pinkish'>
                                <p className='TextoBotaoNavBar'>Rosa Colorida</p>
                            </Button>
                            <Button className='botaoNavBar' variant='text' color='pinkish'>
                                <p className='TextoBotaoNavBar'>Rosa Vermelha</p>
                            </Button>
                            
                        </ButtonGroup>
                        <ButtonGroup id="BottomNavBarConteudo">
                            <Button className='botaoNavBar' variant='text' color='pinkish'>
                                <p className='TextoBotaoNavBar'>Complementos</p>
                            </Button>
                        </ButtonGroup>
                    </div>
                    <FadeMenu buttonLabel='Cidades Atendidas' 
                              menuItems={['Alvorada','Porto Alegre','Canoas','Esteio','Sapucaia do Sul','São Leopoldo','Novo Hamburgo','Gravataí','Cachoeirinha','Eldorado do Sul','Guaíba']} 
                              bgColor={'#800f34'} 
                              hoveredBgColor={'#800f34'}
                              height={72}
                              ></FadeMenu>
                    {
                        /**
                         * <Button id='botaoCidadesAtendidas' endIcon={<IoIosArrowForward/>} color='pinkish'>
                                <p className='TextoBotaoNavBar'>Cidades Atentidas</p>
                            </Button>
                         */
                    }
                    
                </section>
            </ThemeProvider>   
            </header>
} export default Header;