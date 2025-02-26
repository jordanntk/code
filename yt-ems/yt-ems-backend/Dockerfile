# Use an official OpenJDK runtime as a parent image
FROM openjdk:23-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Maven wrapper files and pom.xml
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Install Maven dependencies
RUN ./mvnw dependency:go-offline

# Copy the project files
COPY src ./src

# Expose the port the app runs on
EXPOSE 8080

# Run the application
CMD ["./mvnw", "spring-boot:run"]