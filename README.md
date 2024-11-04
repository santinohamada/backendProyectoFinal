```markdown
# Proyecto Final - Hotel Patagonia 🏨

Este proyecto es el backend de la aplicación **Hotel Patagonia**, un sistema completo para la gestión de un hotel 4 estrellas. Implementado con **Node.js**, **Express**, y **MongoDB**, proporciona una API robusta para gestionar usuarios, habitaciones y reservas.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Dependencias Principales](#dependencias-principales)
- [Características Principales](#características-principales)
- [Mejoras Futuras](#mejoras-futuras)
- [Colaboradores](#colaboradores)
- [Licencia](#licencia)

---

## Descripción

El backend de **Hotel Patagonia** gestiona la autenticación de usuarios, la administración de habitaciones y la gestión de reservas. La API permite que tanto los clientes como los administradores realicen operaciones de manera eficiente, asegurando una experiencia de usuario fluida.

## Estructura del Proyecto

```
backendProyectoFinal/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── .env
├── index.js
└── package.json
```

## Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/santinohamada/backendProyectoFinal.git
   cd backendProyectoFinal
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:

   - `MONGODB_URI`: La URI de conexión a tu base de datos MongoDB.
   - `JWT_SECRET`: La clave secreta para firmar los tokens JWT.

4. Inicia el servidor:
   ```bash
   npm start
   ```

## Dependencias Principales

- `bcrypt`: Para la encriptación de contraseñas.
- `cors`: Para habilitar CORS.
- `express`: Framework para construir la API.
- `express-validator`: Para la validación de datos.
- `jsonwebtoken`: Para manejar la autenticación con tokens JWT.
- `mongoose`: Para interactuar con MongoDB.
- `morgan`: Para el registro de solicitudes HTTP.

## Características Principales

- **Gestión de Usuarios**: Registro y autenticación de usuarios con roles.
- **Gestión de Habitaciones**: Agregar, editar y eliminar habitaciones.
- **Gestión de Reservas**: Crear, consultar y modificar reservas.
- **Middleware de Seguridad**: Protección de rutas sensibles y manejo de errores.
- **Interacción con Frontend**: Conexión efectiva con el frontend a través de endpoints RESTful.

## Mejoras Futuras

- Integración de funcionalidades adicionales según las necesidades del hotel.
- Optimización del rendimiento y seguridad.
- Implementación de pruebas automatizadas para asegurar la calidad del código.

## Colaboradores

¡Agradecemos a los siguientes colaboradores por sus contribuciones! Puedes visitar sus perfiles haciendo clic en sus nombres:

| Colaborador        | Perfil                                    |
|--------------------|-------------------------------------------|
| ![Santino Hamada](https://github.com/santinohamada.png) | [Santino Hamada](https://github.com/santinohamada) |
| ![Felicitas Ralle](https://github.com/FelicitasRalle.png) | [Felicitas Ralle](https://github.com/FelicitasRalle) |
| ![Gustavo Gettar](https://github.com/gusgettar.png) | [Gustavo Gettar](https://github.com/gusgettar) |
| ![Matoma1607](https://github.com/Matoma1607.png) | [Matoma1607](https://github.com/Matoma1607) |

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
```
