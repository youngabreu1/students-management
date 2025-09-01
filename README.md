# Knowledge Base AI Project
To run the project, please pay close attention to each step described. If you have any questions, feel free to contact me via email.

For a better experience with this README, please use the "Open Preview" function in your editor. In VSCode, the default shortcut is Ctrl + Shift + V.

# Project
Here you will find a general overview of the project.

<details>
<summary><strong>What was developed</strong></summary><br />

This project is a RESTful API that serves as an AI assistant for an internal knowledge base. The application uses a RAG (Retrieval-Augmented Generation) architecture to provide accurate and contextual answers. Instead of responding directly, the AI first queries a vector database to find relevant information and then uses that context to formulate the final response.

The development followed best practices for creating AI systems, ensuring a robust, scalable, and easily maintainable solution.

</details>

<details>
<summary><strong>Project Structure</strong></summary><br />

The project is composed of several important entities for its structure:

### 1️⃣ API Server (Go Backend):

This is the core of the application, responsible for receiving questions, orchestrating the context retrieval, and generating answers.

It exposes a /query endpoint for interaction.

It runs on port 3030, or another port configured in the .env file.

### 2️⃣ Ingestion Script (Seeder):

A separate executable responsible for reading data from a primary source (an SQL database), generating embeddings (vector representations) via the Gemini API, and populating the vector database (Weaviate).

It should be executed whenever the knowledge base needs to be updated.

### 3️⃣ Weaviate (Vector Database):

Run via Docker, it is responsible for storing the embeddings and enabling high-speed semantic similarity searches.

The application connects to it for the "Retrieval" step of the RAG process.

### 4️⃣ SQL Database:

The primary source of the knowledge base. The ingestion script reads data from this source.

The connection is configured via the .env file.

### 5️⃣ Google Gemini API:

An external service used for two purposes:

Generating embeddings from the text data.

Generating the final natural language response, based on the retrieved context.

</details>

# Running the project
<details>
<summary><strong>How to initialize</strong></summary><br />

It is important to note that the project was developed using Go v1.21 or higher.

Follow the steps below:

### 1️⃣ Clone this repository:
git clone [YOUR-REPOSITORY-URL]

### 2️⃣ Start Weaviate with Docker:
Navigate to the project's root folder and run the command:
docker-compose up -d

### 3️⃣ Configure environment variables:
Create a .env file in the project root, using the example below as a template. Fill it with your credentials.

# Server Configuration
PORT=8080

# Google Gemini API Key
GEMINI_API_KEY="YOUR_API_KEY_HERE"

# Weaviate Vector Database Configuration
WEAVIATE_HOST="localhost:8080"
WEAVIATE_SCHEME="http"

# Your SQL Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=knowledge_base_db
### 4️⃣ Install project dependencies:
Navigate to the project's root folder and run the command to download the Go packages:
go mod tidy

### 5️⃣ Populate the knowledge base:
Run the ingestion script to read data from your SQL database and save it into Weaviate.
go run ./cmd/seeder/main.go

### 6️⃣ Start the API:
Run the command to start the main server.
go run ./main.go
The API will be running at: http://localhost:8080

### 7️⃣ To stop the application, press Ctrl+C in the terminal where the server is running.

</details>

Final Considerations
<details>
<summary><strong>Important Notes</strong></summary><br />

It was assumed that all inputs provided to the API are valid. Therefore, complex input validations in the API handler were not implemented. In a real-world production scenario, it would be important to add appropriate checks and validations to ensure the application's robustness and security.

It is also expected that the SQL database is already configured, populated, and accessible before running the ingestion script.

</details>

<details>
<summary><strong>Give me some feedback!</strong></summary><br />

I would be very grateful if you could share your feedback on this project. Your input is essential for my continuous learning and improvement. If you have any suggestions, constructive criticism, or comments, please do not hesitate to get in touch.

My email: gabrielcarlos0705@gmail.com

</details>
