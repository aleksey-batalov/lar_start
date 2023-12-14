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
                <strong>Filters example</strong>
            </a>
        </div>
    </div>
</header>

<main>

    <section class="py-5 container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8">

                <form class="g-3" action="{{route('show-products')}}">
                    <div class="form-group mb-2">
                        <label for="exampleFormControlInput1" class="form-label">Модель</label>
                        <input type="text" name="model" class="form-control" id="exampleFormControlInput1" value="{{request()->model}}" placeholder="Модель">
                    </div>
                    <div class="form-group mb-2">
                        <label for="type" class="form-label">Тип мотоцикла</label>
                        <select id="type" name="type" class="form-select" aria-label="Default select example">
                            <option {{request()->type == 'all' ? 'selected' : '' }} value="all">Все</option>
                            <option {{request()->type == 'стандарт' ? 'selected' : '' }} value="стандарт">Стандарт</option>
                            <option {{request()->type == 'эксклюзив' ? 'selected' : '' }} value="эксклюзив">Эксклюзив</option>
                        </select>
                    </div>
                    <div class="form-group mb-2">
                        <label for="type" class="form-label">Бренд</label>
                        <select id="type" name="brand" class="form-select" aria-label="Default select example">
                            <option {{request()->brand == 'honda,yamaha,suzuki' ? 'selected' : '' }} value="honda,yamaha,suzuki">Все бренды</option>
                            <option {{request()->brand == 'honda' ? 'selected' : '' }} value="honda">Honda</option>
                            <option {{request()->brand == 'yamaha' ? 'selected' : '' }} value="yamaha">Yamaha</option>
                            <option {{request()->brand == 'suzuki' ? 'selected' : '' }} value="suzuki">Suzuki</option>
                        </select>
                    </div>
                    <div class="row mb-2">
                        <label class="form-label">Стоимость мотоцикла</label>
                        <div class="col-auto">
                            <label for="exampleFormControlInput2" class="visually-hidden">От</label>
                            <input type="text" name="min" class="form-control" id="exampleFormControlInput2" value="{{request()->min}}" placeholder="от 0">
                        </div>
                        <div class="col-auto">
                            <label for="exampleFormControlInput3" class="visually-hidden">До</label>
                            <input type="text" name="max" class="form-control" id="exampleFormControlInput3" value="{{request()->max}}" placeholder="до 5000000">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-3" style="padding: 5px 30px;">Найти</button>
                </form>

            </div>
        </div>
    </section>

    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                @foreach($products as $product)
                    <div class="card" style="width: 23%; margin: 1%;">
                        <div class="card-body">
                            <p class="card-text" style="text-transform: uppercase;"><strong>{{$product->brand}}</strong> | {{$product->type}}</p>
                            <h5 class="card-title">{{$product->model}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{$product->price}}</h6>
                        </div>
                    </div>
                @endforeach

            </div>
        </div>
    </div>

</main>

<footer class="text-muted py-5">
    <div class="container">
        <p class="float-end mb-1">
            <a href="#">Back to top</a>
        </p>
        <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.2/getting-started/introduction/">getting started guide</a>.</p>
    </div>
</footer>


<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
