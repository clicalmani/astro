<?php
/**
 * Test Environment Bootstrapper
 *
 * Initializes application dependencies, autoloading, database configurations,
 * and environment settings specifically for running test suites.
 *
 * @package Tonka\Tests
 * @author clicalmani
 */

$root = dirname(__DIR__, 1);
include_once $root . '/vendor/autoload.php';

$app = require_once $root . '/bootstrap/app.php';

/**
 * Database Environment Configuration for Testing
 */
$_ENV['DB_NAME'] = 'test';
$_ENV['DB_USER'] = 'root';
$_ENV['DB_PASSWORD'] = 'Limit123#';
$_ENV['DB_TABLE_PREFIX'] = 'test_';

// Register test database configuration and boot application instance
$app->config->set('database', require_once __DIR__ . '/config/database.php');
$app->boot();

/**
 * Global Test Environment Flags
 */
define('TEST_ENV', true);
define('CONSOLE_MODE_ACTIVE', true);

/**
 * Application Runtime Environment Variables
 */
$_ENV['APP_ENV'] = 'testing';
$_ENV['APP_DEBUG'] = true;

return $app;