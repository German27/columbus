@extends('template.base')

@section('title','Registro')

@section('content')

<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h1 class="text-center mt-3">Registro</h1>
      <hr>
    </div>

    <div class="col-md-8 banner-sec">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class="d-block img-fluid" src="images/default.jpg" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
              <div class="banner-text">
                <h2>Disfruta de nuestros beneficios</h2>
                <p>Descuentos de hasta 70%, HOT SALE y envios sin cargo</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="images/default.jpg" alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
              <div class="banner-text">
                <h2>HOT SALE</h2>
                <p>Descuentos semanales en prendas seleccionadas</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="images/default.jpg" alt="Third slide">
            <div class="carousel-caption d-none d-md-block">
              <div class="banner-text">
                <h2>Expande nuestra comunidad</h2>
                <p>Mas de 1.000.000 de usuarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4 login-sec">
      <form class="login-form registro-form clearfix" action="{{ route('register') }}" method="POST" id="registerForm" enctype="multipart/form-data">
        @csrf
      <div class="form-group">
        <div class="form-row">
          <div class="col">
            <label>Nombre</label>
            <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" autofocus>
            @if ($errors->has('name'))
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $errors->first('name') }}</strong>
                </span>
            @endif
            <div class="invalid-feedback">
              {{-- javascript --}}
            </div>
          </div>
          <div class="col">
            <label>Apellido</label>
            <input id="lastname" type="text" class="form-control{{ $errors->has('lastname') ? ' is-invalid' : '' }}" name="lastname" value="{{ old('lastname') }}" autofocus>
            @if ($errors->has('lastname'))
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $errors->first('lastname') }}</strong>
                </span>
                
            @endif
            <div class="invalid-feedback">
              {{-- javascript --}}
            </div>
          </div>
        </div>
      </div>
        <div class="form-group">
          <div class="form-row">
            {{-- <div class="col">
              <label>Nombre de Usuario</label>
              <input id="username" type="text" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}" name="username" value="{{ old('username') }}" autofocus>
              @if ($errors->has('username'))
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $errors->first('username') }}</strong>
                  </span>
              @endif
              <div class="invalid-feedback">
              </div>
            </div> --}}
            <div class="col">
              <label>Nacionalidad</label>
                  <select id="country" class="form-control" name="country" value="">
                  @if ($errors->has('country'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('country') }}</strong>
                    </span>
                  @endif
                  <option value="">Seleccioná</option>
                </select>
                <label id="province" style="display:none">Provincia</label>
                <select id="provinceSelect" style="display:none" class="form-control mt-2">
                </select>
                <div class="invalid-feedback">
                </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}">

          @if ($errors->has('email'))
              <span class="invalid-feedback" role="alert">
                  <strong>{{ $errors->first('email') }}</strong>
              </span>
          @endif
              <div class="invalid-feedback">
              {{-- javascript --}}
              </div>
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <label>Contraseña</label>
              <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password">

              @if ($errors->has('password'))
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $errors->first('password') }}</strong>
                  </span>
              @endif
              <div class="invalid-feedback">
              {{-- javascript --}}
              </div>
            </div>
            <div class="col">
              <label>Repetir Contraseña</label>
                <input id="password-confirm" type="password" class="form-control {{ $errors->has('confirmPassword') ? ' is-invalid' : '' }}" name="confirmPassword">
                @if ($errors->has('confirmPassword'))
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $errors->first('confirmPassword') }}</strong>
                  </span>
                @endif
                <div class="invalid-feedback">
              {{-- javascript --}}
                </div>
            </div>
          </div>
        </div>
        <div class="custom-file form-group">
          <label>Avatar</label>
          <input type="file" class="custom-file-input text-center center-block input-file-ale {{ $errors->has('image') ? ' is-invalid' : '' }}" id="image"  name="userPhoto">
          <label class="custom-file-label text-left" for="image">Elegir</label>
              @if ($errors->has('image'))
                <span class="invalid-feedback" role="alert">
                  <strong>{{ $errors->first('image') }}</strong>
                </span>
              @endif
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
            <small>Recordarme</small>
          </label>
        </div>
        <div class="form-group">
          <button class="btn btn-success float-right mt-3" type="submit">Registrarse</button>
        </div>
      </form>
      <br>
      <br>
      <div class="etc-login-form">
        <div class="text-center"><p>Ya tenes cuenta? <a href="/login">Ingresá acá</a></p></div>
      </div>
    </div>
  </div>
</div>
  <script src="js/countries.js"></script>
  <script src="js/registerValidation.js"></script>
  <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  <script src="js/url.js"></script>

@endsection