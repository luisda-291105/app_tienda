# 🛒 App Tienda

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![CSS](https://img.shields.io/badge/CSS-57.8%25-563d7c)
![HTML](https://img.shields.io/badge/HTML-26.2%25-e34c26)
![JavaScript](https://img.shields.io/badge/JavaScript-16.0%25-f1e05a)

Este es un proyecto web full-stack desarrollado como taller académico. Su propósito principal es aprender a consumir APIs y manejar métodos HTTP (GET, POST, PUT, DELETE) en un contexto práctico de una tienda en línea.

## 📋 Tabla de Contenidos
- [🛒 App Tienda](#-app-tienda)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [✨ Características Principales](#-características-principales)
  - [🚀 Tecnologías Utilizadas](#-tecnologías-utilizadas)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)

## ✨ Características Principales
*   **Autenticación de Usuarios**: Sistema de login que valida credenciales y redirige al panel correspondiente. (Se identificó un ajuste reciente en `login.js` para manejar redirecciones).
*   **Gestión de Productos**: El núcleo de la aplicación, que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un catálogo de productos, interactuando con la API del backend.
*   **Backend API REST**: Implementado con Node.js, expone endpoints para que el frontend se comunique y realice las operaciones sobre los productos y usuarios.
*   **Frontend Dinámico**: Construido con HTML, CSS y JavaScript, consume la API del backend para mostrar y gestionar la información sin recargar la página.

## 🚀 Tecnologías Utilizadas
### Frontend
*   ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) **HTML5**: Estructura de las páginas.
*   ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) **CSS3**: Estilos y diseño visual.
*   ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) **JavaScript (Vanilla)**: Lógica de la interfaz y consumo de APIs.
*   ![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white) **Bootstrap 5**: Framework CSS para agilizar el diseño de componentes y hacer la interfaz responsiva.

### Backend
*   ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) **Node.js**: Entorno de ejecución para JavaScript en el servidor.
*   **JavaScript**: Lenguaje de programación del backend.
*   **API REST**: Arquitectura para la comunicación entre frontend y backend.
*   ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white) **MySQL**: Base de datos relacional para almacenar la información de productos y usuarios.

## 📁 Estructura del Proyecto
El proyecto está organizado en dos carpetas principales que separan claramente el frontend del backend:
