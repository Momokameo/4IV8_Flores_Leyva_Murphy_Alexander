/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Control;

import Modelo.Usuario;
import java.sql.*;
import java.util.*;

public class AccionesUsuario {
    
    public static int registrarEmpleado(Usuario e){
        int estatus = 0;
        try{
            Connection con = Conexion.getConnection();
            String q = "insert into usuarios(nom_usu, pass_usu, email_usu, pais_usu) "
                    + "values(?,?,?,?)";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setString(1, e.getNombre());
            ps.setString(2, e.getPassword());
            ps.setString(3, e.getEmail());
            ps.setString(4, e.getPais());
            
            estatus = ps.executeUpdate();
            System.out.println("Registro de empleado exitoso");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al registar al usuario");
            System.out.println(ed.getMessage());
        
        }
        return estatus;
        
    }
    
    public static int actualizarUsuario(Usuario e){
        int estatus = 0;
        try{
            Connection con = Conexion.getConnection();
            String q = "update usuarios set nom_usu = ?, pass_usu = ?,"
                    + "email_usu = ?, pais_usu = ?"
                    + " where id_usu = ?";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setString(1, e.getNombre());
            ps.setString(2, e.getPassword());
            ps.setString(3, e.getEmail());
            ps.setString(4, e.getPais());
            ps.setInt(5, e.getId());
            
            estatus = ps.executeUpdate();
            System.out.println("Actualizacion del usuario exitosa");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al actualizar al usuario");
            System.out.println(ed.getMessage());
        
        }
        return estatus;
        
    }
    
    public static int borrarUsuario(int id){
        int estatus = 0;
        try{
            Connection con = Conexion.getConnection();
            String q = "delete from usuarios where id_usu = ?";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setInt(1, id);
            
            estatus = ps.executeUpdate();
            System.out.println("Eliminacion del usuario exitoso");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al borrar al usuario");
            System.out.println(ed.getMessage());
        
        }
        return estatus;
        
    }
    
    public static Usuario buscarUsuarioById(int id){
        Usuario e = new Usuario();
        try{
            Connection con = Conexion.getConnection();
            String q = "select * from usuarios where id_usu = ?";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ps.setInt(1, id);
            
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
                e.setId(rs.getInt(1));
                e.setNombre(rs.getString(2));
                e.setPassword(rs.getString(3));
                e.setEmail(rs.getString(4));
                e.setPais(rs.getString(5));
            }
            System.out.println("Se encontro al usuario");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al buscar al usuario");
            System.out.println(ed.getMessage());
        
        }
        return e;
        
    }
    
    public static List<Usuario> getAllUsuarios(){
        List<Usuario> lista = new ArrayList<Usuario>();
        
        try{
            Connection con = Conexion.getConnection();
            String q = "select * from usuarios";
            
            PreparedStatement ps = con.prepareStatement(q);

            
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                Usuario e = new Usuario();
                e.setId(rs.getInt(1));
                e.setNombre(rs.getString(2));
                e.setPassword(rs.getString(3));
                e.setEmail(rs.getString(4));
                e.setPais(rs.getString(5));
                lista.add(e);
            }
            System.out.println("Se encontro a los Usuario");
            con.close();
        }catch(Exception ed){
            System.out.println("Error al buscar a los usuario");
            System.out.println(ed.getMessage());
        
        }
        return lista;
        
    }
    
    
}
