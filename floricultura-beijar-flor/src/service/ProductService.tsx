
export const ProductService = {
    getProductsData() {
        return [
            // 🌟 Produtos em Destaque
            {
                id: '1',
                code: 'prd001',
                name: 'Buquê de Rosas Vermelhas',
                description: 'Lindo buquê com 12 rosas vermelhas frescas',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-a3b7e071005245ebb1ac.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 99.9,
                categories: ['Produtos em Destaque', 'Vermelhos'],
            },
            {
                id: '2',
                code: 'prd002',
                name: 'Orquídea Roxa',
                description: 'Orquídea roxa em vaso decorativo',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-3d66cb902fcfdd9669db.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 120.0,
                categories: ['Produtos em Destaque', 'Plantas'],
            },
            {
                id: '3',
                code: 'prd003',
                name: 'Kit Vinho e Chocolates',
                description: 'Kit premium com vinho tinto e chocolates finos',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-6f8d6c6f81434417cf0d.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 189.9,
                categories: ['Produtos em Destaque', 'Vinho'],
            },
            {
                id: '4',
                code: 'prd004',
                name: 'Coroa de Rosas Brancas',
                description: 'Coroa floral com rosas brancas para ocasiões especiais',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-b8d4451b0d4b92cb4562.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 249.9,
                categories: ['Produtos em Destaque', 'Coroa'],
            },
        
            // ❤️ Vermelhos
            {
                id: '5',
                code: 'vrm001',
                name: '12 Rosas Vermelhas Premium',
                description: '12 rosas vermelhas premium com embalagem especial',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-037e543ae035bb575345.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 149.9,
                categories: ['Vermelhos'],
            },
            {
                id: '6',
                code: 'vrm002',
                name: 'Tulipas Vermelhas',
                description: 'Buquê com 10 tulipas vermelhas frescas',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fsandbox.env.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-15c83146b012b6396b8a.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 99.9,
                categories: ['Vermelhos', 'Plantas'],
            },
            {
                id: '7',
                code: 'vrm003',
                name: 'Kit Rosas e Fernet Capri',
                description: 'Combinação perfeita: rosas vermelhas e vinho tinto',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fsandbox.env.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-a000341753fec49b22dd.jpeg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 199.9,
                categories: ['Vermelhos', 'Vinho'],
            },
            {
                id: '8',
                code: 'vrm004',
                name: 'Cesta de Café com Rosas Vermelhas',
                description: 'Cesta com café gourmet e buquê de rosas vermelhas',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fsandbox.env.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-250200261d64fcf24ac9.jpeg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 149.9,
                categories: ['Vermelhos', 'Café'],
            },
        
            // 🌿 Plantas
            {
                id: '9',
                code: 'plt001',
                name: 'Girassol em Vaso',
                description: 'Girassol plantado em vaso decorativo',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-8476da0aca2b094f8759.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 79.9,
                categories: ['Plantas', 'Girassois'],
            },
            {
                id: '10',
                code: 'plt002',
                name: 'Vaso de Bromelia',
                description: 'Bonsai tradicional japonês com 5 anos de cultivo',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-7769c243732b7bc34818.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 299.9,
                categories: ['Plantas'],
            },
            {
                id: '11',
                code: 'plt003',
                name: 'Orquidea Azul',
                description: 'Samambaia em vaso suspenso para decoração',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-3d66cb902fcfdd9669db.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 49.9,
                categories: ['Plantas'],
            },
            {
                id: '12',
                code: 'plt004',
                name: 'Vaso de Begonia Plantado',
                description: 'Conjunto com 3 suculentas em vasos diferenciados',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-bcfa51653f3408a2cae4.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 59.9,
                categories: ['Plantas'],
            },
        
            // 🎁 Box
            {
                id: '13',
                code: 'box001',
                name: 'Box de Café da Manhã',
                description: 'Cesta completa com itens para um café da manhã especial',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fsandbox.env.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-59a0021dba53823426b9.jpeg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 159.9,
                categories: ['Box', 'Café'],
            },
            {
                id: '14',
                code: 'box002',
                name: 'Box de Chocolates Finos',
                description: 'Seleção de chocolates finos importados',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fsandbox.env.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-86ceb5b8eac51cb6e082.png&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 129.9,
                categories: ['Box'],
            },
            {
                id: '15',
                code: 'box003',
                name: 'Box de Vinho e Petiscos',
                description: 'Vinho tinto acompanhado de seleção de petiscos',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-d3ff69a7b0ac40d76f81.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 199.9,
                categories: ['Box', 'Vinho'],
            },
            {
                id: '16',
                code: 'box004',
                name: 'Box Especial Girassóis',
                description: 'Buquê de girassóis com chocolates e vinho',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-25bfe1ccea0e30bcea2b.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 139.9,
                categories: ['Box', 'Girassois'],
            },
        
            // 🍷 Vinho
            {
                id: '17',
                code: 'vin001',
                name: 'Vinho Tinto Cabernet Sauvignon',
                description: 'Vinho tinto seco de alta qualidade',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-ffb6a0542e6a3a3c2613.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 99.9,
                categories: ['Vinho'],
            },
            {
                id: '18',
                code: 'vin002',
                name: 'Vinho Branco Chardonnay',
                description: 'Vinho branco seco com notas frutadas',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-6293652beeee80f4ca00.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 89.9,
                categories: ['Vinho'],
            },
            {
                id: '19',
                code: 'vin003',
                name: 'Kit Duo Vinhos Importados',
                description: 'Dois vinhos importados selecionados',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-6f8d6c6f81434417cf0d.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 259.9,
                categories: ['Vinho'],
            },
            {
                id: '20',
                code: 'vin004',
                name: 'Espumante Brut Premium',
                description: 'Espumante brut para comemorações',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-941ef178698d4f539808.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 139.9,
                categories: ['Vinho'],
            },
        
            // ⚰️ Coroa
            {
                id: '21',
                code: 'cro001',
                name: 'Coroa de Flores Mistas',
                description: 'Coroa floral com variedade de flores',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fsandbox.env.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-12ebf68f2b05e94e630b.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 299.9,
                categories: ['Coroa'],
            },
            {
                id: '22',
                code: 'cro002',
                name: 'Coroa de Lírios Brancos',
                description: 'Coroa elegante com lírios brancos',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-b0ead27dcb38a956c813.jpeg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 349.9,
                categories: ['Coroa'],
            },
            {
                id: '23',
                code: 'cro003',
                name: 'Coroa de Rosas Vermelhas',
                description: 'Coroa impactante com rosas vermelhas',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-5d154b6e40db57eba59f.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 399.9,
                categories: ['Coroa', 'Vermelhos'],
            },
            {
                id: '24',
                code: 'cro004',
                name: 'Coroa de Girassóis',
                description: 'Coroa vibrante com girassóis frescos',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-3ec478f4124164addd1b.webp&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 279.9,
                categories: ['Coroa', 'Girassois'],
            },
        
            // ☕ Café
            {
                id: '25',
                code: 'caf001',
                name: 'Kit Café Premium',
                description: 'Seleção de cafés especiais de diversas origens',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fsandbox.env.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-c8a3b0e618d38c3a8087.jpeg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 119.9,
                categories: ['Café'],
            },
            {
                id: '26',
                code: 'caf002',
                name: 'Cesta de Café Clássico',
                description: 'Cesta com café tradicional e acompanhamentos',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-3ef7bb697646ae87559b.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 179.9,
                categories: ['Café'],
            },
            {
                id: '27',
                code: 'caf003',
                name: 'Box de Café e Chocolate',
                description: 'Combinação de café gourmet com chocolates finos',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-4129c889bd338bbca9f1.jpeg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 199.9,
                categories: ['Café', 'Box'],
            },
            {
                id: '28',
                code: 'caf004',
                name: 'Café Moído Artesanal',
                description: 'Café moído artesanalmente para melhor aroma',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-6affa8c0bf17c2e0085c.jpg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 69.9,
                categories: ['Café'],
            },
            {
                id: '29',
                code: 'gir001',
                name: 'Buquê de Girassóis',
                description: 'Lindo buquê com girassóis vibrantes',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-c67ee89dfb91f4887d1a.jpeg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 89.9,
                categories: ['Girassóis','Produtos em Destaque'],
            },
            {
                id: '30',
                code: 'gir002',
                name: 'Arranjo de Girassóis',
                description: 'Elegante arranjo de girassóis com folhagens',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fsandbox.env.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-3722eaabefaf5b4709aa.jpeg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 120.0,
                categories: ['Girassóis'],
            },
            {
                id: '31',
                code: 'gir003',
                name: 'Cesta com Girassóis',
                description: 'Cesta decorativa com girassóis e flores do campo',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fapp.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-dcbfea3e7bc62d3df579.jpeg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 150.0,
                categories: ['Girassóis'],
            },
            {
                id: '32',
                code: 'gir004',
                name: 'Vaso de Girassóis',
                description: 'Vaso sofisticado com girassóis e folhagens verdes',
                image: 'https://www.yumi-flor.com.br/_next/image?url=https%3A%2F%2Fsandbox.env.eflorista.com.br%2Ffiles%2Fb6f536f3-c2db-4e4e-94c6-40bf93c0b335%2Fthumb-3633f4fea5538b317b84.jpeg&w=640&q=75&dpl=dpl_5VxpfuY6MhTVRTeR94gAkebFwwUP',
                price: 99.9,
                categories: ['Girassóis'],
            }
        ];
    },

    getProdutosEmDestaque() {
        const products = this.getProductsData();
        return products.filter(product => product.categories.includes('Produtos em Destaque'));
    },

    getProdutosVinhos() {
        const products = this.getProductsData();
        return products.filter(product => product.categories.includes('Vinho'));
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