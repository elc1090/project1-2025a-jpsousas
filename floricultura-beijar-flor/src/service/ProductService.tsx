
export const ProductService = {
    getProductsData() {
        return [
            // 🌟 Produtos em Destaque
            {
                id: '1',
                code: 'prd001',
                name: 'Buquê de Rosas Vermelhas',
                description: 'Lindo buquê com 12 rosas vermelhas frescas',
                image: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/rose-1867325_960_720.jpg',
                price: 99.9,
                categories: ['Produtos em Destaque', 'Vermelhos'],
            },
            {
                id: '2',
                code: 'prd002',
                name: 'Orquídea Roxa',
                description: 'Orquídea roxa em vaso decorativo',
                image: 'https://cdn.pixabay.com/photo/2018/08/17/22/58/orchid-3613583_960_720.jpg',
                price: 120.0,
                categories: ['Produtos em Destaque', 'Plantas'],
            },
            {
                id: '3',
                code: 'prd003',
                name: 'Kit Vinho e Chocolates',
                description: 'Kit premium com vinho tinto e chocolates finos',
                image: 'https://cdn.pixabay.com/photo/2017/07/30/19/42/wine-2550507_960_720.jpg',
                price: 189.9,
                categories: ['Produtos em Destaque', 'Vinho'],
            },
            {
                id: '4',
                code: 'prd004',
                name: 'Coroa de Rosas Brancas',
                description: 'Coroa floral com rosas brancas para ocasiões especiais',
                image: 'https://cdn.pixabay.com/photo/2017/03/27/13/18/flowers-2173121_960_720.jpg',
                price: 249.9,
                categories: ['Produtos em Destaque', 'Coroa'],
            },
        
            // ❤️ Vermelhos
            {
                id: '5',
                code: 'vrm001',
                name: 'Rosas Vermelhas Premium',
                description: '12 rosas vermelhas premium com embalagem especial',
                image: 'https://cdn.pixabay.com/photo/2016/11/29/04/17/roses-1868665_960_720.jpg',
                price: 149.9,
                categories: ['Vermelhos'],
            },
            {
                id: '6',
                code: 'vrm002',
                name: 'Tulipas Vermelhas',
                description: 'Buquê com 10 tulipas vermelhas frescas',
                image: 'https://cdn.pixabay.com/photo/2018/03/20/00/13/tulip-3245124_960_720.jpg',
                price: 99.9,
                categories: ['Vermelhos', 'Plantas'],
            },
            {
                id: '7',
                code: 'vrm003',
                name: 'Kit Rosas e Vinho',
                description: 'Combinação perfeita: rosas vermelhas e vinho tinto',
                image: 'https://cdn.pixabay.com/photo/2021/09/24/17/41/wine-6653053_960_720.jpg',
                price: 199.9,
                categories: ['Vermelhos', 'Vinho'],
            },
            {
                id: '8',
                code: 'vrm004',
                name: 'Cesta de Café com Rosas Vermelhas',
                description: 'Cesta com café gourmet e buquê de rosas vermelhas',
                image: 'https://cdn.pixabay.com/photo/2016/07/12/13/15/breakfast-1512192_960_720.jpg',
                price: 149.9,
                categories: ['Vermelhos', 'Café'],
            },
        
            // 🌿 Plantas
            {
                id: '9',
                code: 'plt001',
                name: 'Girassol em Vaso',
                description: 'Girassol plantado em vaso decorativo',
                image: 'https://cdn.pixabay.com/photo/2016/10/10/11/52/sunflower-1727471_960_720.jpg',
                price: 79.9,
                categories: ['Plantas', 'Girassois'],
            },
            {
                id: '10',
                code: 'plt002',
                name: 'Bonsai Japonês',
                description: 'Bonsai tradicional japonês com 5 anos de cultivo',
                image: 'https://cdn.pixabay.com/photo/2016/11/21/16/55/bonsai-1846098_960_720.jpg',
                price: 299.9,
                categories: ['Plantas'],
            },
            {
                id: '11',
                code: 'plt003',
                name: 'Samambaia Natural',
                description: 'Samambaia em vaso suspenso para decoração',
                image: 'https://cdn.pixabay.com/photo/2017/05/11/21/51/fern-2309573_960_720.jpg',
                price: 49.9,
                categories: ['Plantas'],
            },
            {
                id: '12',
                code: 'plt004',
                name: 'Kit Suculentas',
                description: 'Conjunto com 3 suculentas em vasos diferenciados',
                image: 'https://cdn.pixabay.com/photo/2016/09/02/23/14/flowerpot-1644955_960_720.jpg',
                price: 59.9,
                categories: ['Plantas'],
            },
        
            // 🎁 Box
            {
                id: '13',
                code: 'box001',
                name: 'Box de Café da Manhã',
                description: 'Cesta completa com itens para um café da manhã especial',
                image: 'https://cdn.pixabay.com/photo/2016/07/12/13/15/breakfast-1512192_960_720.jpg',
                price: 159.9,
                categories: ['Box', 'Café'],
            },
            {
                id: '14',
                code: 'box002',
                name: 'Box de Chocolates Finos',
                description: 'Seleção de chocolates finos importados',
                image: 'https://cdn.pixabay.com/photo/2016/11/22/18/32/chocolates-1851247_960_720.jpg',
                price: 129.9,
                categories: ['Box'],
            },
            {
                id: '15',
                code: 'box003',
                name: 'Box de Vinho e Petiscos',
                description: 'Vinho tinto acompanhado de seleção de petiscos',
                image: 'https://cdn.pixabay.com/photo/2017/07/30/19/42/wine-2550507_960_720.jpg',
                price: 199.9,
                categories: ['Box', 'Vinho'],
            },
            {
                id: '16',
                code: 'box004',
                name: 'Box Especial Girassóis',
                description: 'Buquê de girassóis com chocolates e vinho',
                image: 'https://cdn.pixabay.com/photo/2016/10/10/11/52/sunflower-1727471_960_720.jpg',
                price: 139.9,
                categories: ['Box', 'Girassois'],
            },
        
            // 🍷 Vinho
            {
                id: '17',
                code: 'vin001',
                name: 'Vinho Tinto Cabernet Sauvignon',
                description: 'Vinho tinto seco de alta qualidade',
                image: 'https://cdn.pixabay.com/photo/2016/10/22/20/34/wine-1761613_960_720.jpg',
                price: 99.9,
                categories: ['Vinho'],
            },
            {
                id: '18',
                code: 'vin002',
                name: 'Vinho Branco Chardonnay',
                description: 'Vinho branco seco com notas frutadas',
                image: 'https://cdn.pixabay.com/photo/2016/11/21/15/52/wine-1845600_960_720.jpg',
                price: 89.9,
                categories: ['Vinho'],
            },
            {
                id: '19',
                code: 'vin003',
                name: 'Kit Duo Vinhos Importados',
                description: 'Dois vinhos importados selecionados',
                image: 'https://cdn.pixabay.com/photo/2016/07/01/23/20/wine-1495853_960_720.jpg',
                price: 259.9,
                categories: ['Vinho'],
            },
            {
                id: '20',
                code: 'vin004',
                name: 'Espumante Brut Premium',
                description: 'Espumante brut para comemorações',
                image: 'https://cdn.pixabay.com/photo/2016/08/10/19/19/champagne-1589512_960_720.jpg',
                price: 139.9,
                categories: ['Vinho'],
            },
        
            // ⚰️ Coroa
            {
                id: '21',
                code: 'cro001',
                name: 'Coroa de Flores Mistas',
                description: 'Coroa floral com variedade de flores',
                image: 'https://cdn.pixabay.com/photo/2015/05/31/10/53/flowers-792991_960_720.jpg',
                price: 299.9,
                categories: ['Coroa'],
            },
            {
                id: '22',
                code: 'cro002',
                name: 'Coroa de Lírios Brancos',
                description: 'Coroa elegante com lírios brancos',
                image: 'https://cdn.pixabay.com/photo/2017/08/16/16/39/lilies-2647393_960_720.jpg',
                price: 349.9,
                categories: ['Coroa'],
            },
            {
                id: '23',
                code: 'cro003',
                name: 'Coroa de Rosas Vermelhas',
                description: 'Coroa impactante com rosas vermelhas',
                image: 'https://cdn.pixabay.com/photo/2016/11/29/04/17/roses-1868665_960_720.jpg',
                price: 399.9,
                categories: ['Coroa', 'Vermelhos'],
            },
            {
                id: '24',
                code: 'cro004',
                name: 'Coroa de Girassóis',
                description: 'Coroa vibrante com girassóis frescos',
                image: 'https://cdn.pixabay.com/photo/2016/10/10/11/52/sunflower-1727471_960_720.jpg',
                price: 279.9,
                categories: ['Coroa', 'Girassois'],
            },
        
            // ☕ Café
            {
                id: '25',
                code: 'caf001',
                name: 'Kit Café Premium',
                description: 'Seleção de cafés especiais de diversas origens',
                image: 'https://cdn.pixabay.com/photo/2016/11/19/16/51/coffee-1838211_960_720.jpg',
                price: 119.9,
                categories: ['Café'],
            },
            {
                id: '26',
                code: 'caf002',
                name: 'Cesta de Café Clássico',
                description: 'Cesta com café tradicional e acompanhamentos',
                image: 'https://cdn.pixabay.com/photo/2016/07/12/13/15/breakfast-1512192_960_720.jpg',
                price: 179.9,
                categories: ['Café'],
            },
            {
                id: '27',
                code: 'caf003',
                name: 'Box de Café e Chocolate',
                description: 'Combinação de café gourmet com chocolates finos',
                image: 'https://cdn.pixabay.com/photo/2016/08/12/21/36/coffee-1594692_960_720.jpg',
                price: 199.9,
                categories: ['Café', 'Box'],
            },
            {
                id: '28',
                code: 'caf004',
                name: 'Café Moído Artesanal',
                description: 'Café moído artesanalmente para melhor aroma',
                image: 'https://cdn.pixabay.com/photo/2015/07/02/20/11/coffee-828960_960_720.jpg',
                price: 69.9,
                categories: ['Café'],
            }
        ];
    },

    getProdutosEmDestaque() {
        const products = this.getProductsData();
        return products.filter(product => product.categories.includes('Produtos em Destaque'));
    },

    getProdutosVinhos() {
        const products = this.getProductsData();
        return products.filter(product => product.categories.includes('Vinhos'));
    },

    getProdutosBox() {
        const products = this.getProductsData();
        return products.filter(product => product.categories.includes('Box'));
    },

    getProdutosPlantas() {
        const products = this.getProductsData();
        return products.filter(product => product.categories.includes('Plantas'));
    },

    getProdutosCoroa() {
        const products = this.getProductsData();
        return products.filter(product => product.categories.includes('Coroa'));
    },

    getProdutosVermelho() {
        const products = this.getProductsData();
        return products.filter(product => product.categories.includes('Vermelhos'));
    },

    getProdutosGirassois() {
        const products = this.getProductsData();
        return products.filter(product => product.categories.includes('Girassóis'));
    },

    getProdutosCafe() {
        const products = this.getProductsData();
        return products.filter(product => product.categories.includes('Café'));
    },
}