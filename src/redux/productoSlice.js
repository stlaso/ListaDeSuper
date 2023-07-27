import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productos: [], // Cambia productos de objeto a array
};

let lastId = 0; // Variable para llevar el seguimiento del último id asignado

export const productoSlice = createSlice({
  name: "producto",
  initialState,
  reducers: {
    addProducto: (state, action) => {
      const { nombre, precio, cantidad,status } = action.payload;
      const nuevoProducto = {
        id: lastId + 1,
        nombre: nombre,
        precio: precio,
        cantidad:cantidad,
        status: status,
      };
      lastId += 1;
      state.productos.push(nuevoProducto);
    },
    changeStatus: (state, action) => {
      const { id, status } = action.payload;
      const producto = state.productos.find((prod) => prod.id === id);
      if (producto) {
        producto.status = status;
      }
    },
    DeleteProducto:(state,action)=>
    {
      const { productoId } = action.payload;
      const index = state.productos.findIndex((prod) => prod.id === productoId);
      if (index !== -1) {
        state.productos.splice(index, 1);
      }
    }
    
  },


});

export const { addProducto, changeStatus,DeleteProducto } = productoSlice.actions;
export default productoSlice.reducer;