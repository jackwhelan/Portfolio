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
    
    // If a method is specified
    if ($router->method_exists)
    {
        $method = $router->method;

        // If the class specified is router, execute the method on the router instance.
        // Otherwise, execute it on the newly created instance of the class specified.
        if ($router->class == "router")
        {
            $router->$method();
        }
        else
        {
            $router->instance->$method();
        }
    }
    // If a method isn't specified
    else
    {
        // If there is a class instantiated and it has a renderView method, render the view.
        if ($router->instance_instantiated && method_exists($router->instance, "renderView"))
        {
            $router->instance->renderView();
        }
    }
?>