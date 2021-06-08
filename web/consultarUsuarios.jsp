<%@page import="java.util.List"%>
<%@page import="Modelo.Usuario"%>
<%@page import="Control.AccionesUsuario"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <style> 
            body {background-color: lightgoldenrodyellow;}
            h1 {font-family:'Odibee Sans', cursive; color:black;}
            .container {; text-align: center; height: 300px;width: 100%; margin: 0 auto;}
            .registroEmpleado {height: 80%; width: 50%; text-align:center;margin: 0 auto;}
            .tabla{display: table;}
        </style>

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Tabla de Todos los Usuarios</h1>
        <br>
        <table border="2" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Pais</th>
                    <th></th>
                    <th></th>
                </tr>        
            </thead>
            <tbody>
                <%
                    List<Usuario> lista = AccionesUsuario.getAllUsuarios();
                    for(Usuario e : lista){
                    %>
                    <tr>
                        <td> <%=e.getId()%> </td>
                        <td> <%=e.getNombre()%> </td>
                        <td> <%=e.getPassword()%> </td>
                        <td> <%=e.getEmail()%> </td>
                        <td> <%=e.getPais()%> </td>
                        <td> <a href="editarusuario.jsp?id=<%=e.getId()%>" >Editar</a> </td>
                        <td> <a href="borrarusuario?id=<%=e.getId()%>" >Borrar</a> </td>
                    </tr>    
                    <%
                    }
                    %>
            </tbody>
        </table>
        <br>
        <a href="admin.html" >Regresar al Menu Principal</a>
    </body>
</html>
