const Menu = [
    {
        heading: ' Navegação',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Dashboard',
        icon: 'icon-speedometer',
        translate: 'sidebar.nav.DASHBOARD',
        submenu: [{
                name: 'Mapa OS',
                path: 'dashboardv1'
            }
        ]
    },
    {
        name: 'Cadastros',
        icon: 'icon-fire',
        translate: 'sidebar.nav.MENU',
        submenu: [{
            name: 'Usuario',
            translate: 'sidebar.nav.SUBMENU',
            path: 'usuario',
        }]
    },
    // {
    //     name: 'Menu',
    //     icon: 'icon-speedometer',
    //     translate: 'sidebar.nav.MENU',
    //     label: { value: 1, color: 'info' },
    //     submenu: [{
    //         name: 'Submenu',
    //         translate: 'sidebar.nav.SUBMENU',
    //         path: 'submenu'
    //     }]
    // }
];

export default Menu;