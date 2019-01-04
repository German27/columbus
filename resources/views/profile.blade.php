@extends('template.base')

@section('title','Perfil')

@section('content')

  <div class="container">
    <h1 class="text-center mt-3">Perfil</h1>
    <hr>
    <div class="row">
      <div class="col-sm-3 mt-5">
        <div class="text-center">
          <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar">

          <div class="text-danger font-weight-bold">
          
          </div>
        </div>
      </div>

      <div class="col-sm-9">
        <button class="btn btn-info float-right" type="button" id="editButton">Editar perfil</button>
        <form class="form profile-form clearfix mt-5" action="" method="post" id="registrationForm" enctype="multipart/form-data">
            @csrf
              {{ method_field('PUT') }}
        
            <div class="form-group">
              <div class="form-row">
                <div class="col">
                  <label><h6>Nombre: </h6></label>
                <input type="text" class="form-control" name="name" value="" disabled>
                  <div class="invalid-feedback">
                  </div>
                </div>
                <div class="col">
                  <label><h6>Apellido:</h6></label>
                  <input type="text" class="form-control" name="lastname" value="" disabled>
                  <div class="invalid-feedback">
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="form-row">
                {{-- <div class="col">
                  <label><h6>Nombre de Usuario:</h6></label>
                  <input type="text" class="form-control" name="username" value="" disabled>
                  <div class="invalid-feedback">
                  </div>
                </div> --}}
                <div class="col">
                  <label><h6>Pais:</h6></label>
                  <select id="inputState" class="form-control" name="country" value="" disabled>
                    
                  </select>
                  <div class="invalid-feedback">
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="col-xs-6">
                <label><h6>Email:</h6></label>
                <input type="email" class="form-control" name="email" value="" disabled>
                <div class="invalid-feedback">
                </div>
              </div>
            </div>

            <h6>Subí tu foto...</h6>
            <div class="custom-file form-group">
              <input type="file" class="custom-file-input text-center center-block input-file-ale" id="customFile" name="userPhoto" disabled>
              <label class="custom-file-label text-left" for="customFile">Elegir</label>
              <span></span>
            </div>

            <div class="form-group">
              <div class="col-xs-12">
                <button class="btn btn-danger float-left" type="button" id="discardButton" hidden>Descartar</button>
                <button class="btn btn-success float-right" type="submit" id="saveButton" hidden>Guardar cambios</button>
              </div>
            </div>
          </form>

      </div>
    </div>
  </div>

@endsection