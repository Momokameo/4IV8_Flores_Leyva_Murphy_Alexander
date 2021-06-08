<%@page contentType="text/html" pageEncoding="UTF-8" session="true" %>
<!DOCTYPE html>
<html>
    <head>
        <style> 
            body {background-color: lightgoldenrodyellow;}
            h1 {font-family:'Odibee Sans', cursive; color:black;}
            .container {; text-align: center; height: 300px;width: 100%; margin: 0 auto;}
            .container2 {background-color: lightblue; height: 80%; width: 30%; text-align:center;margin: 0 auto;}
            .container3{padding: 1rem; height: 80%; width: 30%; text-align:center;margin: 0 auto;}
        </style>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Registro de Empleado Exitoso</h1>
        <%
            HttpSession sesionCliente = request.getSession();
           
            %>
        <br>
        <br>
        <a href="superadmin.html" >Regresar al Menu Principal</a>
    </body>
</html>
