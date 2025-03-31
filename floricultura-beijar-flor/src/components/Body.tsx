import { Button, ButtonGroup} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles/Body.css'

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    categories: string[]; // Array de categorias
    quantity: number;
    inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
    rating: number;
};



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
                <section className="Produtos">
                    <article className="ProdutosPorCategoria" id="ProdutosEmDestaque">
                        <h1 className='TituloCategoria'>Produtos em Destaque</h1>
                        <hr className='Linha'/>
                        <div className="ProdutoGrid">
                            <article className="Product" id="Product1"></article>
                            <article className="Product" id="Product2"></article>
                        </div>
                    </article>

                    {/* Categoria: Vermelhos */}
                    <article className="ProdutosPorCategoria" id="ProdutosVermelhos">
                        <h1 className='TituloCategoria'>Vermelhos</h1>
                        <hr className='Linha'/>
                        <div className="ProdutoGrid">
                            <article className="Product" id="Product3"></article>
                            <article className="Product" id="Product4"></article>
                        </div>
                    </article>

                    {/* Categoria: Plantas */}
                    <article className="ProdutosPorCategoria" id="ProdutosPlantas">
                        <h1 className='TituloCategoria'>Plantas</h1>
                        <hr className='Linha'/>
                        <div className="ProdutoGrid">
                            <article className="Product" id="Product5"></article>
                            <article className="Product" id="Product6"></article>
                        </div>
                    </article>

                    {/* Categoria: Box */}
                    <article className="ProdutosPorCategoria" id="ProdutosPlantas">
                        <h1 className='TituloCategoria'>Box</h1>
                        <hr className='Linha'/>
                        <div className="ProdutoGrid">
                            <article className="Product" id="Product7"></article>
                            <article className="Product" id="Product8"></article>
                        </div>
                    </article>
                    {/* Categoria: Vinho */}
                    <article className="ProdutosPorCategoria" id="ProdutosPlantas">
                        <h1 className='TituloCategoria'>Vinho</h1>
                        <hr className='Linha'/>
                        <div className="ProdutoGrid">
                            <article className="Product" id="Product9"></article>
                            <article className="Product" id="Product10"></article>
                        </div>
                    </article>

                    {/* Categoria: Coroa */}
                    <article className="ProdutosPorCategoria" id="ProdutosPlantas">
                        <h1 className='TituloCategoria'>Coroa</h1>
                        <hr className='Linha'/>
                        <div className="ProdutoGrid">
                            <article className="Product" id="Product11"></article>
                            <article className="Product" id="Product12"></article>
                        </div>
                    </article>

                    {/* Categoria: Cafe */}
                    <article className="ProdutosPorCategoria" id="ProdutosPlantas">
                        <h1 className='TituloCategoria'>Café</h1>
                        <hr className='Linha'/>
                        <div className="ProdutoGrid">
                            <article className="Product" id="Product13"></article>
                            <article className="Product" id="Product14"></article>
                        </div>
                    </article>

                    {/* Categoria: Girassois */}
                    <article className="ProdutosPorCategoria" id="ProdutosPlantas">
                        <h1 className='TituloCategoria'>Girassois</h1>
                        <hr className='Linha'/>
                        <div className="ProdutoGrid">
                            <article className="Product" id="Product15"></article>
                            <article className="Product" id="Product16"></article>
                        </div>
                    </article>
                </section>
           </main>
} export default Body;