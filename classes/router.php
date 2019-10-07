<?php
    namespace classes;
    
    class router
    {
        var $class;
        var $method;
        var $methodArg;

        function __construct()
        {
            $exploded_url = explode('/', $_SERVER['REQUEST_URI']);
            array_shift($exploded_url);
            $this->class = array_shift($exploded_url);
            $this->method = array_shift($exploded_url);
            $this->methodArg = array_shift($exploded_url);
        }

        # Returns True if the route is valid.
        function checkRouteValidity()
        {
            if (method_exists("classes\\".$this->class, $this->method))
            {
                return True;
            }
            else
            {
                return False;
            }
        }

        function executeRoute()
        {
            if (isset($this->methodArg) || $this->class = "router")
            {
                eval("classes\\" . $this->class . "::" . $this->method . "(" . $this->methodArg . ");");
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

            if(strlen($this->method) > 0)
            {
                echo "<p>Method = " . $this->method . "</p>";
            }
            else
            {
                echo "<p>no method</p>";
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