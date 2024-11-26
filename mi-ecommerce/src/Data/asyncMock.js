const base_de_datos =[
    {id:1,
    nombre:'Vino CONCHA Y TORO Reservado Tinto Cabernet Sauvignon',
    precio:300,
    category:'tinto',
    img:'https://prod-resize.tiendainglesa.com.uy/images/large/P067225-1.jpg?20210701173132,Vino-CONCHA-Y-TORO-Reservado-Tinto-Cabernet-Sauvignon-750-ml-en-Tienda-Inglesa'
    },

    {id:2,
        nombre:'Vino GARZÓN Tinto Estate Cabernet de Corte',
        precio:500,
        category:'tinto',
        img:'https://prod-resize.tiendainglesa.com.uy/images/medium/P409902-2.jpg?20231219090618,Vino-GARZoN-Tinto-Estate-Cabernet-de-Corte-750-ml-en-Tienda-Inglesa'
    },

    {id:3,
        nombre:'Vino GARZÓN Rosado Pinot Rose de Corte',
        precio:550,
        category:'rosado',
        img:'https://prod-resize.tiendainglesa.com.uy/images/large/P399638-2.jpg?20231219090804,Vino-GARZoN-Rosado-Pinot-Rose-de-Corte-750-ml-en-Tienda-Inglesa'
    },

    {id:4,
        nombre:'Vino DON PASCUAL Blanco Brut Blanc de Blancs',
        precio:350,
        category:'blanco',
        img:'https://prod-resize.tiendainglesa.com.uy/images/large/P079559-2.jpg?20240701161837,Vino-DON-PASCUAL-Blanco-Brut-Blanc-de-Blancs-750-ml-en-Tienda-Inglesa'
    },

    {id:5,
        nombre:'Vino GARZÓN Sauvignon Blanc De Corte',
        precio:550,
        category:'blanco',
        img:'https://prod-resize.tiendainglesa.com.uy/images/large/P399637-2.jpg?20231219090847,Vino-GARZoN-Sauvignon-Blanc-De-Corte-750-ml-en-Tienda-Inglesa'
        },

        {id:6,
            nombre:'Vino RUTINI Trumpeter Blanco Chardonnay',
            precio:1040,
            category:'blanco',
            img:'https://prod-resize.tiendainglesa.com.uy/images/large/P496970-1.jpg?20210121155328,Vino-RUTINI-Trumpeter-Blanco-Chardonnay-750-ml-en-Tienda-Inglesa'
            },

            {id:7,
                nombre:'Vino CASTEL PUJOL Trebbiano Blanco',
                precio:990,
                category:'blanco',
                img:'https://prod-resize.tiendainglesa.com.uy/images/large/P508201-1.jpg?20210702132710,Vino-CASTEL-PUJOL-Folklore-Blanco-Trebbiano-Malvasia-750-ml-en-Tienda-Inglesa'
                },

                {id:8,
                    nombre:'Vino Rose CASTEL PUJOL',
                    precio:990,
                    category:'rosado',
                    img:'https://prod-resize.tiendainglesa.com.uy/images/medium/P001537-2.jpg?20231121162140,Vino-Rose-CASTEL-PUJOL-750-ml-en-Tienda-Inglesa'
                    },

                    {id:9,
                        nombre:'Vino BOUZA Parcela Única Tinto Merlot B9',
                        precio:2990,
                        category:'tinto',
                        img:'https://prod-resize.tiendainglesa.com.uy/images/large/P214323-1.jpg?20230614110109,Vino-BOUZA-Parcela-unica-Tinto-Merlot-B9-750-ml-en-Tienda-Inglesa'
                        },

]

export const getProducts = () => {
    return new Promise ( (res,rej) => {
        setTimeout(() => {
            res(base_de_datos)
            rej('error')
        }, 5000);
    });

}

export const getProductsByCategory = (category) => {
    return new Promise ((res,rej) => {
        setTimeout (() => {
            res(base_de_datos.filter(e =>e.category==category))
            rej('no existe')
        }, 5000);
    });
}