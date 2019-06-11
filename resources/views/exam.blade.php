<!DOCTYPE html>
<html>
<head>
    <title>jQuery UI Sortable - Example</title>
    <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
          rel = "stylesheet">
    <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

    <style>
        #sortable-2, #sortable-3 { list-style-type: none; margin: 0;
            padding: 0; width: 25%; }
        #sortable-2 li, #sortable-3 li { margin: 0 3px 3px 3px; padding: 0.4em;
            padding-left: 1.5em; font-size: 17px; height: 16px; }
        .default {
            background: #cedc98;
            border: 1px solid #DDDDDD;
            color: #333333;
        }
    </style>

    <script>
        $(function() {
            $( "#sortable-2" ).sortable({
                delay:500
            });
            $( "#sortable-3" ).sortable({
                distance:30
            });
        });
    </script>
</head>

<body>
<h3>Delay by 500ms</h3>
<ul id = "sortable-2">
    <li class = "default">Product 1</li>
    <li class = "default">Product 2</li>
    <li class = "default">Product 3</li>
    <li class = "default">Product 4</li>
</ul>
<h3>Distance Delay by 30px</h3>
<ul id = "sortable-3">
    <li class = "default">Product 1</li>
    <li class = "default">Product 2</li>
    <li class = "default">Product 3</li>
    <li class = "default">Product 4</li>
</ul>
</body>
</html>