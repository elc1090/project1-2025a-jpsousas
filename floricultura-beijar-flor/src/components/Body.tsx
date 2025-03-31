import { Button, ButtonGroup} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles/Body.css'
import CardProdutos from './commons/CardProdutos';


declare module '@mui/material/styles' {
    interface Palette {
      pinkish: Palette['primary'];
    }
  
    interface PaletteOptions {
      pinkish?: PaletteOptions['primary'];
    }
};

  //metodos pra sobrescrever o estilo padrao dos botoes e aceitar customizados
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      pinkish: true;
    }
};
  
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
                variant: "outlined",
                color: "pinkish",
                sx: {
                    textTransform: "capitalize",
                    borderRadius: 0,
                    border: "solid 0.01em",
                    borderColor: "#800f34",
                    ":hover": {
                        backgroundColor:"rgba(252, 144, 210, 0.28)",
                    },
                    marginLeft: "60px",
                },
                
            },
        },
    },
});

function Body(){
    return <main id="Body">
                <section id='Banner'>
                    <div id='Slider'>
                        <figure>
                            <a href="/">
                                <img className='SlideBannerImages'  src='https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2F9b6150097a388eac6cb4.png&w=3840&q=80&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP' alt='Retrato da fachada da floricultura com informações de contato para Atendimento, com dois numeros de telefone: (51) 33300155 e (51) 9982-4008> para Whatssapp'></img>
                            </a>
                        </figure>
                    </div>
                </section>
                <section id='BarraDePesquisaContainer'>
                    <input type="text" placeholder='Pesquisar por... 🔍'id="BarraDePesquisa" />
                </section>
                <section id='Filtro'>
                    <span id="LegendaFiltro">Filtrar por valor </span>
                        <ButtonGroup id="GrupoBotoesFiltro">
                            <ThemeProvider theme={theme}>
                                <Button className='BotaoFiltro'>
                                    <p className='LegendaBotaoFiltro'>até R$ 80</p>
                                </Button>
                                <Button className='BotaoFiltro'>
                                    <p className='LegendaBotaoFiltro'>R$ 80 a R$ 120</p>
                                </Button>
                                <Button className='BotaoFiltro'>
                                    <p className='LegendaBotaoFiltro'>R$ 120 a R$ 180</p>
                                </Button>
                                <Button className='BotaoFiltro'>
                                    <p className='LegendaBotaoFiltro'>R$ 180 a R$ 250</p>
                                </Button>
                                <Button className='BotaoFiltro'>
                                    <p className='LegendaBotaoFiltro'>acima de R$ 250</p>
                                </Button>
                            </ThemeProvider>
                        </ButtonGroup>
                </section>
                <CardProdutos/>
           </main>
} export default Body;