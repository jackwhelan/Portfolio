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
        var $instance_instantiated;

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
                    if ($this->class != "")
                    {
                        $this->instance = new $className();
                        $this->instance_instantiated = True;
                    }
                }
            }
            else
            {
                # Note blank class doesn't exist, but still instantiates the home class.
                $this->class_exists = False;
                $this->instance = new home();
                $this->instance_instantiated = True;
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
                echo "<p>No class specified.</p>";
            }

            if (strlen($this->class) > 0)
            {
                echo "<p>Class Exists: " . ($this->class_exists ? 'true' : 'false') . "</p>";
            }

            if(strlen($this->method) > 0)
            {
                echo "<p>Method = " . $this->method . "</p>";
            }
            else
            {
                echo "<p>No method specified.</p>";
            }

            if (isset($this->method))
            {
                echo "<p>Method Exists: " . ($this->method_exists ? 'true' : 'false') . "</p>";
            }
            
            if (strlen($this->methodArg) > 0)
            {
                echo "<p>Method Argument = " . $this->methodArg . "</p>";
            }
            else
            {
                echo "<p>No method arguments specified.</p>";
            }

            echo "<p>Instance Instantiated: " . ($this->instance_instantiated ? 'true' : 'false') . "</p>";

            if ($this->instance_instantiated && !$this->class_exists)
            {
                echo "Home instantiated because no class was found.";
            }

            echo "</fieldset>";
        }
    }
?>