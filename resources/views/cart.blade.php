@extends('template.base')

@section('title','Cart')

@section('content')

<div class="container">
  <div class="col-12 col-lg-8 mt-5">
    <h2 class="bg-dark text-light mb-3">Mis productos</h2>
    <div class="d-inline">
      <img src="images/default.png" class="img-circle align-top mr-3 ml-3" alt="avatar">
    </div>
    <div class="d-inline-block">
      <p class="">ProductName</p>
      <p class="">ProductCategory</p>
      <p class="">ProductSize</p>
      <p class="">ProductQuantity</p>
    </div>
    <div class="float-sm-right">
      <p class="font-weight-bold text-success mr-2">$0.00</p>
    </div>  
    <div class="d-block p-3">
       <button disabled="disabled" class="btn btn-secondary mr-2">Editar</button>
       <button disabled="disabled" class="btn btn-danger">Borrar</button>
    </div>
  </div>
</div>

@endsection