package com.caminhao.bateponto;

import java.util.Scanner;


     

public class App {
  
    static  Scanner scanner = new Scanner(System.in);
       static String nomeUsu = null;
       static String nomeDigi = null;
       static String senhaUsu = null;
       static String senhaDigi = null;
public static void main(String[] args) throws Exception {
    int opcao = -1;
//Loop Menu    
while (opcao != 0){

    menuInicial();
   opcao = scanner.nextInt();
   scanner.nextLine();

switch (opcao) {
    case 1:
        cadastro();
                   
    break;
    case 2:
        login();
                          
    break;
    case 0:
        System.out.println("Saindo...");
            
    break;
    default:
        System.out.println("Opção inválida, tente novamente.");

        }
    }
}

public static void menuInicial(){
    System.out.println("\n---Sistema Bate Ponto---");
    System.out.println("1- Cadastrar-se ");
    System.out.println("2- Login");
    System.out.println("0- Sair");
    System.out.println("Escolha uma opção: ");
    }

public static void cadastro() {
    //cadastro nome usuario
    System.out.println("---Página de Cadastro---");
    System.out.println("Digite o nome para Cadastrar: ");
    nomeUsu = scanner.nextLine();
                 
    //cadastro senha
    System.out.println("Cadastre a senha: ");
    senhaUsu = scanner.nextLine();


    System.out.println("Usuário cadastrado com sucesso!!!");
    }
public static void login() {

    System.out.println("---Login---");
        
    //Login nome Usuário
    System.out.println("Digite o nome de usuário: ");
    nomeDigi = scanner.nextLine();
    //login senha usuário
    System.out.println("Digite a senha: ");
    senhaDigi = scanner.nextLine();

        //conferindo se o nome e a senha e a mesma cadastrada
        if(nomeDigi.equals(nomeUsu) && senhaDigi.equals(senhaUsu)){
            System.out.println("usuário logado.");
            areaPrivada();
        }else {
            System.out.println("Nome de usuário não encontrado!!");
        }    

       
    } 
    
public static void areaPrivada() {
        int opcaoPrivada = -1;

    while(opcaoPrivada != 0) {

        System.out.println("---Área de Cadastramento do Caminhão e Bate Ponto---");
        System.out.println("1- Cadastrar caminhão");
        System.out.println("2- Bate Ponto");
        System.out.println("0- Sair da Área Privada");
        System.out.println("Escolha uma Opção: ");
        opcaoPrivada = scanner.nextInt();
        scanner.nextLine();


    switch (opcaoPrivada) {
    case 1:
        System.out.println("Digite o nome do Motorista: ");
        String nomeMoto = scanner.nextLine();
      
        

        System.out.println("Digite a Placa do caminhão: ");
        String placaCaminhao = scanner.nextLine();
        

        System.out.println("Digite o modelo do caminhão: ");
        String modeloCaminhao = scanner.nextLine();
       

        System.out.println("Caminhão cadastrado com sucesso!!!");
        System.out.println("Motorista: " + nomeMoto);
        System.out.println("Placa: " + placaCaminhao);
        System.out.println("Modelo: " + modeloCaminhao);

    break;
    case 2:
        System.out.println("Ponto registrado com sucesso!!! " + java.time.LocalTime.now().withNano(0));

    break;
    case 0:

    System.out.println("Saindo do sistema...");

    break;  
    default:
               System.out.println("Opção inválida.");
            }

        }
    }


}
