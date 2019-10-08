<?php
    namespace classes;
    
    class router
    {
        var $class;
        var $method;
        var $methodArg;
        var $class_exists;
        var $method_exists;
        var $instance;

        function __construct()
        {
            $exploded_url = explode('/', $_SERVER['REQUEST_URI']);
            array_shift($exploded_url);
            $this->class = array_shift($exploded_url);
            $this->method = array_shift($exploded_url);
            $this->methodArg = array_shift($exploded_url);
            $this->checkRouteValidity();
        }

        # Returns True if the route is valid.
        function checkRouteValidity()
        {
            $className = "classes\\" . $this->class;

            if (class_exists($className))
            {
                $this->class_exists = True;
                if ($this->class != "router")
                {
                    $this->instance = new $className();
                }
            }
            else
            {
                $this->class_exists = False;
            }

            if (method_exists("classes\\".$this->class, $this->method))
            {
                $this->method_exists = True;
            }
            else
            {
                $this->method_exists = False;
            }
        }

        # For debugging purposes, returns the route information in HTML.
        function info()
        {
            echo "<fieldset>";
            echo "<legend>Router Information</legend>";
            if(strlen($this->class) > 0)
            {
                echo "<p>Class = " . $this->class . "</p>";
            }
            else
            {
                echo "<p>no class</p>";
            }

            if ($this->class_exists)
            {
                echo "<p>Class Exists: yes</p>";
            }
            else
            {
                echo "<p>Class Exists: no</p>";
            }

            if(strlen($this->method) > 0)
            {
                echo "<p>Method = " . $this->method . "</p>";
            }
            else
            {
                echo "<p>no method</p>";
            }

            if ($this->method_exists)
            {
                echo "<p>Method Exists: yes</p>";
            }
            else
            {
                echo "<p>Method Exists: no</p>";
            }
            
            if (strlen($this->methodArg) > 0)
            {
                echo "<p>Method Argument = " . $this->methodArg . "</p>";
            }
            else
            {
                echo "<p>no method arguments</p>";
            }
            echo "</fieldset>";
        }
    }
?>