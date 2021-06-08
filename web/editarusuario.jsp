
<%@page import="Modelo.Usuario"%>
<%@page import="Control.AccionesUsuario"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EditUsu</title>
    </head>
    <body>
        <h1>Tabla para Actualizar Usuarios</h1>
        <br>
        <form method="post" name="actualizarUsuario" action="actualizarUsuario">
                    <table border="2" >
                        <%
                            int id = Integer.parseInt(request.getParameter("id"));
                            
                            Usuario e = AccionesUsuario.buscarUsuarioById(id);
                            %>
                        <tr>
                            <td>ID</td>
                            <td><input type="hidden" name="id2" value="<%=e.getId()%>" ></td>
                        </tr>
                        <tr>
                            <td>Nombre:</td>
                            <td><input type="text" name="nombre2" size="30" value="<%=e.getNombre()%>"></td>        
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input type="password" name="password2" size="30" value="<%=e.getPassword()%>" ></td>        
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="email" name="email2" size="30" value="<%=e.getEmail()%>" ></td>        
                        </tr>
                        <tr>
                            <td>Pais:</td>
                            <td> <select name="pais2"> 
                                    <option>Mexico</option>
                                    <option>EEUA</option>
                                    <option>Canada</option>
                                    <option>Otro</option>
                                </select> </td>        
                        </tr>
                        <tr>
                            <td colspan="2" ><input type="submit" 
                                                    value="Actualizar Usuario"></td>
                        </tr>        
                    </table>
                </form>
    </body>
</html>
