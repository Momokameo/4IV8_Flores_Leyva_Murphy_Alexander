/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Control;


import java.sql.PreparedStatement;
import java.sql.ResultSet;
/**
 *
 * @author momok
 */
public class Consultas extends Conexion{
    public boolean autenticacion(String usuario, String contraseña){
        PreparedStatement pst = null;
        ResultSet rs= null;
        
        try{
            String consulta="select * from empleados where email_emp = ? and pass_emp = ?";
            pst = getConnection().prepareStatement(consulta);
            pst.setString(1,usuario);
            pst.setString(2, contraseña);
            rs=pst.executeQuery();
            
            if(rs.absolute(1)){
                return true;
            }
            
        }catch (Exception e){
            System.err.println("Error"+e);
        }finally {
            try{
                if(getConnection() != null) getConnection().close();
                if(pst != null) pst.close();
                if(rs != null) rs.close();
            }catch(Exception e){System.err.println("Error"+e);}
        }
        
        return false;
    }
    /*public static void main(String[] args){
        Consultas co = new Consultas();
        System.out.println(co.autenticacion("algo@algo.com","123"));
    }*/
}
