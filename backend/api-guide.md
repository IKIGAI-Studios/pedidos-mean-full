# Guía API

<span style="color: cyan;">**`GET`**</span> `/api/pedidos/` Devuelve un array de todos los pedidos

<span style="color: cyan;">**`GET`**</span> `/api/pedidos/:id` Devuelve sólo el pedido que tiene esa id

<span style="color: green;">**`POST`**</span> `/api/pedidos/` Crea un nuevo pedido

<span style="color: yellow;">**`PUT`**</span> `/api/pedidos/:id` Modifica el pedido con esa id

<span style="color:red;">**`DELETE`**</span> `/api/pedidos/:id` Borra el pedido con esa id

---
## Campos de la solicitud
    {
        "producto": "Tomate Saladet", // String
        "precio": 19.9, // Number
        "fecha": "2024-07-02T02:32:09.690Z", // Date
        "nombre_cliente": "Elba Surero", // String
        "direccion_cliente": "Melquiades Garza # 69", // String
        "tipo_pago": "Tarjeta Débito" // (Efectivo | Tarjeta Débito | Tarjeta Crédito)
    }
    
