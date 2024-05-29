export class formulario extends HTMLElement{
    connectedCallback(){
        this.attachShadow({mode:"open"});
        this.shadowRoot.innerHTML=/*Html*/`
        <style rel="stylesheet">
        @import "./bootstrap/css/bootstrap.min.css";
        @import "./style.css";
        </style>
        <form class=" addProduct row g-3" >
        <div class="col-md-4">
          <label for="id-product" class="form-label">ID</label>
          <input type="text" name="id" class="form-control" id="id-product" placeholder="Ingrese el Id" >
        </div>
        <div class="col-md-4">
          <label for="name-product" class="form-label">Nombre</label>
          <input type="text" name="nombre" class="form-control" id="name-product" >
        </div>
        <div class="col-md-4">
          <label for="description-product">Descripcion</label>
          <textarea class="form-control" name="descripcion" placeholder="Leave a comment here" id="description-product" style="height: 100px"></textarea>
        </div>
        <div class="col-md-3">
          <label for="type-product" class="form-label">Categoria</label>
          <select class="form-select" name="categoria" id="type-product">
            <option selected disabled value="">Elige...</option>
            <option>Hilos</option>
            <option>Tela</option>
            <option>Botones</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="provider-product" class="form-label">Proveedor</label>
          <input type="text" name="proveedor" class="form-control" id="provider-product">
        </div>
        <div class="col-md-4">
          <label for="cost-product" class="form-label">costo c/u</label>
          <input type="number" name="costo" class="form-control" id="cost-product">
        </div>
        <div class="col-md-4">
          <label for="unidad-product" class="form-label">Unidad de medida</label>
          <input type="text" name="unidad-medida" class="form-control" id="unidad-product">
        </div>
        <div class="col-md-4">
          <label for="stock-product" class="form-label">Stock</label>
          <input type="number" name="stock" class="form-control" id="stock-product">
        </div>
        <div class="col-md-3">
          <label for="fechaDeAdquisicion" class="form-label">Fecha de llegada</label>
          <input type="date" name="fechaDeAdquisicion" class="form-control" id="fechaDeAdquisicion" >
        </div>
        <div class="col-md-3">
          <label for="fechaDeAdquisicion" class="form-label">Fecha de vencimiento</label>
          <input type="date" name="fechaDeAdquisicion" class="form-control" id="fechaDeAdquisicion" >
        </div>
        <div class=" col-md-4">
          <label for="ubicacion-product" class="form-label">Ubicacion del producto</label>
          <input type="number" name="ubicacionEnAlmacen" class="form-control" id="ubicacion-product" placeholder="" >
        </div>
        <div class="col-md-4">
          <label for="notes-product">Notas Adicionales</label>
          <textarea class="form-control" name="notasAdicionales" placeholder="Leave a comment here" id="notes-product" style="height: 100px"></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
      `;

    }
};

 customElements.define("info-div",formulario)