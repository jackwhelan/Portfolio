<?php
    // Class autoloader
    spl_autoload_register(function($className) {
        $ds = DIRECTORY_SEPARATOR;
        $dir = __DIR__;
        $className = str_replace('\\', $ds, $className);
        $file = "{$dir}{$ds}{$className}.php";
        
        if(is_readable($file)) {
            require_once $file;
        }
    });

    use classes\router;

    $router = new router();
    
    if ($router->method_exists)
    {
        $method = $router->method;

        if ($router->class == "router")
        {
            $router->$method();
        }
        else
        {
            $router->instance->$method();
        }
    }
    else
    {
        if (isset($router->instance) && method_exists($router->instance, "renderView"))
        {
            $router->instance->renderView();
        }
    }
?>