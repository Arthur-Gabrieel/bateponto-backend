# Imagem oficial do Java 24 da Eclipse Temurin
FROM eclipse-temurin:24-jdk

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia todos os arquivos do seu projeto para dentro do container
COPY . /app

# Roda o Maven Wrapper para construir o projeto e gerar o .jar, ignorando testes
RUN ./mvnw clean package -DskipTests

# Expõe a porta 8080 padrão do Spring Boot
EXPOSE 8080

# Comando para rodar o arquivo .jar gerado
CMD ["java", "-jar", "target/bateponto-0.0.1-SNAPSHOT.jar"]
