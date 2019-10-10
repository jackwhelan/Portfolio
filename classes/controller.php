<?php
    namespace classes;

    class controller
    {
        function renderView()
        {
            $title = "Jack Whelan";
            $local_title = $this->title;
            $local_view = $this->local_view;
            require_once($this->view);
        }
    }
?>