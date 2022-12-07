import { Router } from "express";
import { metodos as proveedorController } from '../controllers/proveedor.controller.js';

const router = Router();

//para listar los pedidos por rango ESTE ES POST
router.post('/proveedoresrango/',proveedorController.postPedidoChefProveedorRango);

router.get('/',proveedorController.getProveedores);
router.get('/pedidos/',proveedorController.getPedidosChefProveedorIngrediente);
router.get('/:idProveedor',proveedorController.getProveedor);
router.get('/pedidos/:ci',proveedorController.getPedidosChef);
router.post('/pedidos/',proveedorController.addChefIngredienteProveedor);
router.post('/',proveedorController.addProveedor);
router.delete('/:idProveedor',proveedorController.deleteProveedor);
router.put('/',proveedorController.updateProveedor);


export default router;