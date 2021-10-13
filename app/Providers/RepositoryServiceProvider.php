<?php

namespace App\Providers;


use App\Interfaces\CheckoutRepositoryInterface;
use App\Interfaces\CustomerRepositoryInterface;
use App\Repositories\BaseRepository;
use App\Repositories\BranchRepository;
use App\Repositories\BrandRepository;
use App\Repositories\CheckoutRepository;
use App\Repositories\CustomerRepository;
use App\Repositories\ProductRepository;
use Illuminate\Support\ServiceProvider;
use App\Repositories\InventoryRepository;
use App\Interfaces\BaseRepositoryInterface;
use App\Interfaces\BranchRepositoryInterface;
use App\Interfaces\BrandRepositoryInterface;
use App\Interfaces\ProductRepositoryInterface;
use App\Interfaces\InventoryRepositoryInterface;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(BaseRepositoryInterface::class, BaseRepository::class);
        $this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
        $this->app->bind(CustomerRepositoryInterface::class, CustomerRepository::class);
        $this->app->bind(BranchRepositoryInterface::class, BranchRepository::class);
        $this->app->bind(InventoryRepositoryInterface::class, InventoryRepository::class);
        $this->app->bind(BrandRepositoryInterface::class, BrandRepository::class);
        $this->app->bind(CheckoutRepositoryInterface::class, CheckoutRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
