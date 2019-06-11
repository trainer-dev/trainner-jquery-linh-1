<!DOCTYPE html>
<html>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <head>
        <title>Jquery Trainning</title>
        <link rel="stylesheet" type="text/css" href="{{asset("/css/app.css")}}">
        <link rel="stylesheet" type="text/css" href="{{asset("/css/style.css")}}">

        <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
              rel = "stylesheet">
        <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

        <script src="{{asset('/js/index.js')}}"></script>



    </head>
    <body>

    <h2>Only another to do example</h2>

    <div class="row">
        <div class="col-sm-5">
            <div class="form-group">
                <textarea class="form-control" name="text" rows="5" id="textarea"></textarea><br>
            </div>
            <button id="import">Import</button> &nbsp;
            <button id="importTop">Import Top</button> &nbsp;
        </div>
        <div class="col-sm-7">
            <ul class="list">
            </ul>

            <button id="delete">Delete</button> &nbsp;
            <button id="export">Export</button> &nbsp;
            <button id="order">Order</button>


            <form id="id">
            </form>
        </div>
    </div>


    </body>
</html>

