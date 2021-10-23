
export const routes =  [
            {
                path: '/admin/dashboard',
                name:'dashboard',
                component: () => import('../components/Dashboard/Dashboard.vue'),
            },
    // product components
          {
              path: '/admin/products/create',
              name: 'products.create',
              component: () => import('../components/Products/Create.vue'),
          },
          {
              path: '/admin/products/index',
              name: 'products.index',
              component: () => import('../components/Products/Index.vue'),
          },
            {
                path: '/admin/products/edit/:id',
                name: 'products.edit',
                component: () => import('../components/Products/Edit.vue'),
            },
            {
                path: '/admin/products/view/:id',
                name: 'products.view',
                component: () => import('../components/Products/View.vue'),
            },

          // branch components
          {
            path: '/admin/branch/create',
            name: 'branch.create',
            component: () => import('../components/Branch/Create.vue'),
        },
        {
            path: '/admin/branch/index',
            name: 'branch.index',
            component: () => import('../components/Branch/Index.vue'),
        },
    // customer components
    {
        path: '/admin/customers/create',
        name: 'customers.create',
        component: () => import('../components/Customers/Create.vue'),
    },
    {
        path: '/admin/customers/index',
        name: 'customers.index',
        component: () => import('../components/Customers/Index.vue'),
    },
        // inventory components
        {
            path: '/admin/inventory/add',
            name: 'transfer.create',
            component: () => import('../components/Transfer/MakeTransfer.vue'),
        },
        {
            path: '/admin/inventory/index',
            name: 'transfer.index',
            component: () => import('../components/Transfer/Index.vue'),
        },
        {
            path: '/admin/brand/create',
            name: 'brand.create',
            component: () => import('../components/Brands/Create.vue'),
        },
        {
            path: '/admin/brand/index',
            name: 'brand.index',
            component: () => import('../components/Brands/Index.vue'),
        },

    // sales
    {
        path: '/admin/reciept/index',
        name: 'reciepts.index',
        component: () => import('../components/Sales/Sales.vue'),
    },
    {
        path: '/admin/reciept/view/:id',
        name: 'reciepts.view',
        component: () => import('../components/Sales/Show.vue'),
    },

      ]
