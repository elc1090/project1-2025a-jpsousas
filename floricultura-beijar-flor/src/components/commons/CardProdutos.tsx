import { useEffect, useState } from "react";
import { ProductService } from "../../service/ProductService";
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Button } from '@mui/material';
import { LuShoppingCart } from "react-icons/lu";
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    categories: string[]; // Array de categorias
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
                    height: "50px",
                    ":hover": {
                        backgroundColor: "#800f34",
                    },
                    backgroundColor: '#ec407a',
                    marginLeft: "12%",
                },
                
            },
        },
    },
});

export default function CardProdutos() {
    const [productsEmDestaque, setProductsEmDestaque] = useState<Product[]>([]);
    const [productsVinhos, setProductsVinhos] = useState<Product[]>([]);
    const [productsPlantas, setProductsPlantas] = useState<Product[]>([]);
    const [productsCoroa, setProductsCoroa] = useState<Product[]>([]);
    const [productsVermelho, setProductsVermelho] = useState<Product[]>([]);
    const [productsGirassois, setProductsGirassois] = useState<Product[]>([]);
    const [productsCafe, setProductsCafe] = useState<Product[]>([]);
    const [productsBox, setProductBox] = useState<Product[]>([]);
    useEffect(() => {
        // Chama as funções do ProductService para obter os produtos por categoria
        setProductsEmDestaque(ProductService.getProdutosEmDestaque());
        setProductsVinhos(ProductService.getProdutosVinhos());
        setProductsPlantas(ProductService.getProdutosPlantas());
        setProductsCoroa(ProductService.getProdutosCoroa());
        setProductsVermelho(ProductService.getProdutosVermelho());
        setProductsGirassois(ProductService.getProdutosGirassois());
        setProductsCafe(ProductService.getProdutosCafe());
        setProductBox(ProductService.getProdutosBox());
    }, []);

    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const productTemplate = (product: Product) => {
        return (
            <div className="CardProduto">
                <div className="ContainerImagem">
                    <img src={product.image} alt={product.name} className="ImagemProduto" />
                </div>
                <div>
                    <div id="ContainerNomeProduto">
                        <h4 className="NomeProduto">{product.name}</h4>
                    </div>
                    <div id="ContainerPrecoBotaoComprar">
                        <h4 id="PrecoProduto">R$ {product.price}</h4>
                        <ThemeProvider theme={theme}>
                            <Button endIcon={<LuShoppingCart color="white"></LuShoppingCart>}>
                                <p id="LabelBotaoComprar">COMPRAR</p>
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>
                <br/>
            </div>
        );
    };

    return (
        <section className="Produtos">
            <article className="ProdutosPorCategoria">
                {/* Carousel para "Produtos em Destaque" */}
                <h1 className='TituloCategoria'>Produtos em Destaque</h1>
                <hr className='Linha'/>
                <Carousel value={productsEmDestaque} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={0} itemTemplate={productTemplate} />

            </article>

            <article className="ProdutosPorCategoria">
                {/* Carousel para "Vermelho" */}
                <h1 className='TituloCategoria'>Vermelhos</h1>
                <hr className='Linha'/>
                <Carousel value={productsVermelho} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={0} itemTemplate={productTemplate} />
            </article>

            <article className="ProdutosPorCategoria">
                {/* Carousel para "Plantas" */}
                <h1 className='TituloCategoria'>Plantas</h1>
                <hr className='Linha'/>
                <Carousel value={productsPlantas} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={0} itemTemplate={productTemplate} />

            </article>

            <article className="ProdutosPorCategoria">
                {/* Carousel para "Box" */}
                <h1 className='TituloCategoria'>Box</h1>
                <hr className='Linha'/>
                <Carousel value={productsBox} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={0} itemTemplate={productTemplate} />
            </article>

            <article className="ProdutosPorCategoria">
                {/* Carousel para "Vinhos" */}
                <h1 className='TituloCategoria'>Vinho</h1>
                <hr className='Linha'/>
                <Carousel value={productsVinhos} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={0} itemTemplate={productTemplate} />
            </article>

            <article className="ProdutosPorCategoria">
                {/* Carousel para "Coroa" */}
                <h1 className='TituloCategoria'>Coroa</h1>
                <hr className='Linha'/>
                <Carousel value={productsCoroa} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={0} itemTemplate={productTemplate} />
            </article>

            <article className="ProdutosPorCategoria">
                {/* Carousel para "Girassóis" */}
                <h1 className='TituloCategoria'>Girassois</h1>
                <hr className='Linha'/>
                <Carousel value={productsGirassois} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={0} itemTemplate={productTemplate} />

            </article>

            <article className="ProdutosPorCategoria">
                {/* Carousel para "Café" */}
                <h1 className='TituloCategoria'>Café</h1>
                <hr className='Linha'/>
                <Carousel value={productsCafe} numVisible={4} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={0} itemTemplate={productTemplate} />
            </article>
            
            
        </section>
    );
}