<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Filters</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

</head>
<body>

<header>
    <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
                <strong>Send Mail example</strong>
            </a>
        </div>
    </div>
</header>

<main>

    <section class="py-5 container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8">

                <h1>{{ $title }}</h1>
                @if(session('success'))
                    <h3 style="color: green;">{{ session('success') }}</h3>
                    <p>С Вами свяжуться в самое ближайшее время.</p>
                @endif
                @if(session('error'))
                    <h3 style="color: red;">{{ session('error') }}</h3>
                    <p>Что-то пошло не так, попробуйте еще раз.</p>
                @endif


            </div>
        </div>
    </section>

</main>


<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

<script>
    //setTimeout(function(){history.back();}, 3000);
    setTimeout(function(){ window.location.href = "{{ $previous_url }}"; }, 3000);
</script>

</body>
</html>

