
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>

        <!-- Mercado Pago -->
        <script src="https://sdk.mercadopago.com/js/v2"></script>

        @vitereactrefresh()
        @vite('resources/js/app.jsx')
    </head>
    <body class="antialiased">
       <div id="app"></div>


       <script>
           const mp = new MercadoPago("{{config('services.mercadopago.public_key')}}");
       </script>
    </body>
</html>
