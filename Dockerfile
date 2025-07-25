FROM maven:3.9.4-eclipse-temurin-24

WORKDIR /app

COPY . /app

RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/bateponto-0.0.1-SNAPSHOT.jar"]
