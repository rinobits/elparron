# **SISTEMA DE GESTIÓN**
# **_API PASTELERIA_** <hr>
> ## Descripción
- API REST para la gestión de procesos en pastelería.

<hr>

>## Métodos

- ### **Login /auth**
    **MÉTODO**  | **PARA**
    ------------ | -------------
    POST         | Autenticación
    <hr>

- ### **Usuarios /usuarios**
    **MÉTODO**  | **PARA**
    ------------ | -------------
    GET          | Obtener todos 
    GET:{id}     | Obtener uno
    PUT:{id} *   | Edita uno
    POST *       | Crea uno
    DELETE:{id} *| Elimina uno
    <hr>

- ### **Pedidos /pedidos**
    **MÉTODO**  | **PARA**
    ------------ | -------------
    GET          | Obtener todos 
    GET:{id}     | Obtener uno
    PUT:{id}    | Edita uno *
    POST        | Crea uno *
    DELETE:{id} | Elimina uno *
    <hr>

#### (*) Requieren de autenticación

>## Modelos

- ### **Usuarios**
    **KEY**  | **TYPE**
    ------------ | -------------
    userName        | string (1) *
    userPassword    | string (2) *
##### (*) REQUIRED
#### (1)  3-30 chars
#### (2)  8-32, entre minúsculas, mayúsculas, números y símbolos (una de cada una).

- ### **Pedidos**
    **KEY**  | **TYPE**
    ------------ | -------------
    name     | string *
    phone    | string (1) *
    tipoMasa    | string *
    saborMasa    | string *
    tamano    | string *
    cobertura    | string *
    description    | string
    message    | string
    value    | integer * (2)
    deposit    | integer (3)
    horaEntrega    | string (4) *
##### (*)  REQUIRED
#### (1)  Números de Chile, máximo 15 chars.
#### (2)  De 0 a 1000000
#### (3)  De 0 a 999999
#### (4)  3-5 chars

<style>table{margin:15px;pading:5px;border:1px solid rgba(150,20,150);box-shadow:1px 1px rgba(20,20,20), -1px -1px rgba(20,20,20)}h1{text-shadow: 2px 2px 2px #CE5937;}h2{text-shadow: 1px 1px 1px #CE5937;}h3{text-shadow: 2px 2px 2px rgb(70,0,50);}h4{color:rgba(70,10,10,0.9);font-weight:bolder;}h5{color:red;font-weight:bolder;text-shadow: 2px 2px 2px rgb(70,0,50);}</style>
