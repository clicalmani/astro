<?php
namespace App\Providers;

use Clicalmani\Foundation\Providers\CacheServiceProvider as Base;
use Symfony\Component\DependencyInjection\Loader\Configurator\ServiceConfigurator;
use Symfony\Component\DependencyInjection\Loader\Configurator\DefaultsConfigurator;
use Override;

class CacheServiceProvider extends Base
{
    protected string $adapter = \Symfony\Component\Cache\Adapter\FilesystemAdapter::class;
    protected string $path = 'storage/cache';
    // protected string $adapter = \Symfony\Component\Cache\Adapter\RedisAdapter::class;

    #[Override]
    protected function config(ServiceConfigurator|DefaultsConfigurator $config): void
    {
        parent::config($config);

        // $client = \Symfony\Component\Cache\Adapter\RedisAdapter::createConnection('redis://localhost');
        // $config->args([$client]);
    }
}