@extends('template.base')

@section('title','Cart')

@section('content')

  <div class="col-12 col-lg-8">
    <div class="bg-dark mb-3 mt-4 p-1 rounded">
      <h2 class="text-light">Mis productos</h2>
    </div>
    <div class="d-inline">
      <img src="images/default.png" class="img-circle align-top ml-3" alt="avatar">
    </div>
    <div class="d-inline-block ml-4">
      <p class="">ProductName</p>
      <p class="">ProductCategory</p>
      <p class="">ProductSize</p>
      <p class="">ProductQuantity</p>
    </div>
    <div class="float-sm-right">
      <p class="font-weight-bold text-success mr-2 ml-4 d-block">$0.00</p>
    </div>  
    <div class="d-block p-3">
       <button class="btn btn-secondary mr-2">Editar</button>
       <button class="btn btn-danger">Borrar</button>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <div class="bg-dark mt-4 pb-1 rounded">
      <div class="bg-danger p-1 rounded border border-secondary border-top-0 border-right-0 border-left-0 mb-3">
        <h2 class="text-center text-light">Resumen</h2>
      </div>
      <div class="col-12">
        <p class="text-light">Subtotal: $0.00</p>
        <p class="text-light">Coste de envio: $0.00</p>
        <p class="text-light font-weight-bold">Total: $0.00</p>
      </div>
      <div class="col-12">
        <div class="m-4">
          <button class="btn btn-success btn-block font-weight-bold">PAGAR</button>
          <p class="text-light font-weight-bold text-center m-2">O</p>
          <button class="btn btn-secondary btn-block font-weight-bold">SEGUIR COMPRANDO</button>
        </div>
      </div>
      <div class="col-12">
        <p class="text-light font-weight-bold mb-0">Date prisa!</p>
        <p class="text-light">Aunque tus productos esten en tu carrito de compras, pueden agotarse.</p>
      </div>
    </div>    
  </div>

@endsection