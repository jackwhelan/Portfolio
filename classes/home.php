<?php
    namespace classes;

    class home
    {
        var $view = "views/layout.phtml";

        function renderView()
        {
            require_once($this->view);
        }
    }
?>