<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>GYM MANAGEMENT</title>
    <link rel="stylesheet" href="{{asset('./bootstrap.min.css')}}">
    <link rel="shortcut icon" href="images/GYMM.png" type="image/x-icon">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


    <!-- Scripts -->
<style>
    body{
        background:  url({{url('images/4927320-abstrait-orange-et-blanc-couleur-fond-avec-forme-geometrique-vector-illustration-vectoriel.jpg')}});
    }
</style>
</head>
<body >


    <div   id="root" >


    </div>




</body>
</html>



@vitereactrefresh
@vite(['resources/js/app.jsx','resources/css/app.css'])
