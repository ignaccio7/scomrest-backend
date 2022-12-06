import { Router } from "express";
import { metodos as proveedorController } from '../controllers/proveedor.controller.js';

const router = Router();

router.get('/',proveedorController.getProveedores);
router.get('/pedidos/',proveedorController.getPedidosChefProveedorIngrediente);
router.get('/pedidos/:ci',proveedorController.getPedidosChef);
router.post('/pedidos/',proveedorController.addChefIngredienteProveedor);
router.post('/',proveedorController.addProveedor);
router.delete('/:idProveedor',proveedorController.deleteProveedor);
router.put('/',proveedorController.updateProveedor);


export default router;