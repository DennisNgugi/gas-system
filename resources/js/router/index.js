
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
            name: 'inventory.create',
            component: () => import('../components/Inventory/AddInventory.vue'),
        },
        {
            path: '/admin/inventory/index',
            name: 'inventory.index',
            component: () => import('../components/Inventory/Index.vue'),
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

      ]
