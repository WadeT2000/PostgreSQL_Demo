# See blow instructions for Teminal set up or navigate to Local Docker Database using Typescript setup

# PostgreSQL Setup Instructions

## Linux Instructions

### Installing PostgreSQL

1. Open a terminal.
2. Update package list and install PostgreSQL:
    ```bash
    sudo apt update
    sudo apt install postgresql postgresql-contrib
    ```
3. Verify installation:
    ```bash
    psql --version
    ```

### Create Database and User

1. Open a terminal.
2. Switch to the `postgres` user:
    ```bash
    sudo -i -u postgres
    ```
3. Enter the PostgreSQL command line interface:
    ```bash
    psql
    ```
4. Create the database and user, and grant privileges:
    ```sql
    CREATE DATABASE tacsrtDev_db;
    CREATE USER <your-username> WITH PASSWORD '<your-password>';
    GRANT ALL PRIVILEGES ON DATABASE tacsrtDev_db TO <your-username>;
    \l
    \q
    ```

### Set Up Configuration File

1. Open a terminal.
2. Edit the `.env` file:
    ```bash
    nano ~/.env
    ```
3. Add the following environment variables:
    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=tacsrtDev_db
    DB_USERNAME=<your-username>
    DB_PASSWORD=<your-password>
    ```
4. Save and exit (Ctrl + X, then Y, then Enter).

### Log Into Database

1. Open a terminal.
2. Connect to the database:
    ```bash
    sudo -i -u postgres
    psql -h localhost -U <your-username> -d tacsrtDev_db
    ```

### Create Table and Manipulate Data

1. Create a table:
    ```sql
    CREATE TABLE test_table (id SERIAL PRIMARY KEY, name VARCHAR(100));
    ```
2. Insert a record:
    ```sql
    INSERT INTO test_table (name) VALUES ('Sample Name');
    ```
3. Select records:
    ```sql
    SELECT * FROM test_table;
    ```
4. Update a record:
    ```sql
    UPDATE test_table SET name = 'Updated Name' WHERE id = 1;
    ```
5. Delete a record:
    ```sql
    DELETE FROM test_table WHERE id = 1;
    ```

### Start and Stop Scripts

1. Create a file named `start_postgres.sh` with the following content:
    ```bash
    sudo systemctl start postgresql
    ```
2. Create a file named `stop_postgres.sh` with the following content:
    ```bash
    sudo systemctl stop postgresql
    ```
3. Make scripts executable:
    ```bash
    chmod +x start_postgres.sh stop_postgres.sh
    ```

## Windows Instructions

### Installing PostgreSQL

1. Download PostgreSQL for Windows from [PostgreSQL Downloads](https://www.postgresql.org/download/windows/).
2. Run the installer and follow the installation prompts.

### Verify Installation

1. Open Command Prompt (cmd).
2. Verify installation:
    ```cmd
    psql --version
    ```

### Create Database and User

1. Open Command Prompt (cmd).
2. Enter the PostgreSQL command line interface:
    ```cmd
    psql -U postgres
    ```
3. Create the database and user, and grant privileges:
    ```sql
    CREATE DATABASE tacsrtDev_db;
    CREATE USER <your-username> WITH PASSWORD '<your-password>';
    GRANT ALL PRIVILEGES ON DATABASE tacsrtDev_db TO <your-username>;
    \l
    \q
    ```

### Create `.env` File

1. Open Notepad.
2. Set the following environment variables:
    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=tacsrtDev_db
    DB_USERNAME=<your-username>
    DB_PASSWORD=<your-password>
    ```
3. Save the file to your desired location.

   **Alternatively:**
   1. Right-click “This PC” or “Computer” on your desktop or File Explorer.
   2. Click “Properties” > “Advanced system settings” > “Environment Variables”.
   3. Add new system variables with names and values matching the `.env` file.

### Log Into Database

1. Open Command Prompt (cmd).
2. Connect to the database:
    ```cmd
    psql -h localhost -U <your-username> -d tacsrtDev_db
    ```

### Create Table and Manipulate Data

1. Create a table:
    ```sql
    CREATE TABLE test_table (id SERIAL PRIMARY KEY, name VARCHAR(100));
    ```
2. Insert a record:
    ```sql
    INSERT INTO test_table (name) VALUES ('Sample Name');
    ```
3. Select records:
    ```sql
    SELECT * FROM test_table;
    ```
4. Update a record:
    ```sql
    UPDATE test_table SET name = 'Updated Name' WHERE id = 1;
    ```
5. Delete a record:
    ```sql
    DELETE FROM test_table WHERE id = 1;
    ```

### Start and Stop PostgreSQL Service

1. **Start PostgreSQL**:
    ```cmd
    net start postgresql-x64-<version>
    ```
2. **Stop PostgreSQL**:
    ```cmd
    net stop postgresql-x64-<version>
    ```

Replace `<version>` with the version number you installed (e.g., `15`).






# Setting up your Local Docker Database using Typescript

    - Everything is completely set up for you to have acces to your database as well as creating new "Api" endpoints on Localhost:8080;
    - See below to set up you docker containers to access the database.


# This is my Docker-Compose tacsrtDev_db template
    
    Make sure you have docker-desktop downloaded

# First step before running
    
    Open docker-desktop in the background
        
        (Windows Users)
        -Navigate to settings
            - Navigate to resources, then WSL integration
            - Ensure the Enable checkbox is selected and your terminal is selected as well.


    In the VS Code terminal:
        - CD into the backend folder and run 'npm install'

    After running npm install, in the terminal CD back to PostgreSQL_Demo and do the following:

        1. ` docker-compose up --build `

    Before we start creating our backend lets check to make sure our database hase been build properly.

    Make your terminal as big as possible

    You may not have an error code at all: 
        Your terminal should look similar to below
    
    tacsrt_container  | 2024-09-13 20:40:08.619 UTC [1] LOG:  database system is ready to accept connections
    tacsrt_backend    | 
    tacsrt_backend    | > backend@1.0.0 start
    tacsrt_backend    | > knex migrate:latest && knex seed:run && nodemon --exec ts-node src/app.ts
    tacsrt_backend    | 
    tacsrt_backend    | Requiring external module ts-node/register
    tacsrt_backend    | Using environment: development
    tacsrt_backend    | Batch 1 run: 1 migrations
    tacsrt_backend    | Requiring external module ts-node/register
    tacsrt_backend    | Using environment: development
    tacsrt_backend    | Ran 1 seed files
    tacsrt_backend    | [nodemon] 3.1.4
    tacsrt_backend    | [nodemon] to restart at any time, enter `rs`
    tacsrt_backend    | [nodemon] watching path(s): *.*
    tacsrt_backend    | [nodemon] watching extensions: ts,json
    tacsrt_backend    | [nodemon] starting `ts-node src/app.ts`


    Move onto (The application should be up and running) below


    Else see below:


    Look for an error line and/or tacsrt_backend exit line,

        tacsrt_backend exited with code 1 or any other codes.

    above the error code it should display similar to below:
        (IF YOU HAVE ANY TO BEGIN WITH)

    

    tacsrt_backend  | 
    tacsrt_backend  | > backend@1.0.0 start
    tacsrt_backend  | > knex migrate:latest && knex seed:run && nodemon --exec ts-node src/app.ts
    tacsrt_backend  | 
    tacsrt_backend  | Using environment: development
    tacsrt_container   | 2024-08-05 19:16:48.543 UTC [40] FATAL:  database "<Your Database name>" does not exist                   (Look at this error in particular)
    tacsrt_backend  | database "<Your Database name>" does not exist
    tacsrt_backend  | error: database "<Your Database name>" does not exist
    tacsrt_backend  |     at Parser.parseErrorMessage (/src/app/node_modules/pg-protocol/dist/parser.js:283:98)
    tacsrt_backend  |     at Parser.handlePacket (/src/app/node_modules/pg-protocol/dist/parser.js:122:29)
    tacsrt_backend  |     at Parser.parse (/src/app/node_modules/pg-protocol/dist/parser.js:35:38)
    tacsrt_backend  |     at Socket.<anonymous> (/src/app/node_modules/pg-protocol/dist/index.js:11:42)
    tacsrt_backend  |     at Socket.emit (node:events:520:28)
    tacsrt_backend  |     at addChunk (node:internal/streams/readable:559:12)
    tacsrt_backend  |     at readableAddChunkPushByteMode (node:internal/streams/readable:510:3)
    tacsrt_backend  |     at Readable.push (node:internal/streams/readable:390:5)
    tacsrt_backend  |     at TCP.onStreamRead (node:internal/stream_base_commons:191:23)
    backend exited with code 1

    If you have an error in your terminal see Common Errors below for fixes.

# Common Errors

    Do not go to a step base off of the error code. Read the error and the potential errors below and adjust accordingly.

    1. If you run into the issue of already having a container with this name follow directions below
            The container name "/db" is already in use by container "---------------------------------------". You have to remove (or rename) that container to be able to reuse that name.

            - Navigate to docker-compose.yaml and change the container name on Line 4

            OR

            - In the terminal 
                - Press Lctrl+C
                + ` docker container rm <Container Name> ` (Container Name should be the container that is being hosted on the same port)
                (This should resolve your container issues)
            If this fixes any and all errors proceed to (The application should be up and running) below

    2. Database that you've created not actually being created? follow below instructions
    
    tacsrt_backend  | 
    tacsrt_backend  | > backend@1.0.0 start
    tacsrt_backend  | > knex migrate:rollback && knex migrate:latest && knex seed:run && nodemon ./src/app.js
    tacsrt_backend  | 
    tacsrt_backend  | Using environment: development
    tacsrt_container   | 2024-08-05 19:16:48.543 UTC [40] FATAL:  database "<Your Database name>" does not exist
    tacsrt_backend  | database "<Your Database name>" does not exist
    tacsrt_backend  | error: database "<Your Database name>" does not exist
    tacsrt_backend  |     at Parser.parseErrorMessage (/src/app/node_modules/pg-protocol/dist/parser.js:283:98)
    tacsrt_backend  |     at Parser.handlePacket (/src/app/node_modules/pg-protocol/dist/parser.js:122:29)
    tacsrt_backend  |     at Parser.parse (/src/app/node_modules/pg-protocol/dist/parser.js:35:38)
    tacsrt_backend  |     at Socket.<anonymous> (/src/app/node_modules/pg-protocol/dist/index.js:11:42)
    tacsrt_backend  |     at Socket.emit (node:events:520:28)
    tacsrt_backend  |     at addChunk (node:internal/streams/readable:559:12)
    tacsrt_backend  |     at readableAddChunkPushByteMode (node:internal/streams/readable:510:3)
    tacsrt_backend  |     at Readable.push (node:internal/streams/readable:390:5)
    tacsrt_backend  |     at TCP.onStreamRead (node:internal/stream_base_commons:191:23)
    backend exited with code 1
    
    The easiest way to go about this fix actions

        1. Delete all previous volumes so it creates your database upon starting your application
            (Be warned this will delete any previous databases that you have build in your user-data directory, if you dont have anything personal that you have build and want to keep then avoid doing this step)
            
            - In your current terminal
                + Press L-ctrl + C
                + ` docker-compose down -v `
                + ` docker-compose up --build `
            Everything should be up and running as intended
            If this fixes any and all erros proceed to (The application should be up and running) below
                    

# The application should be up and running

        localhost:8080/ should display
                - My API is up and running!
            As well as and end point
        localhost:8080/users
                - [
                   { "id": 1, "name": "Billy", "created_at": "current_date", "updated_at": "current_date"},
                   { "id": 2, "name": "Timmy", "created_at": "current_date", "updated_at": "current_date"}, 
                   { "id": 3, "name": "Jimmy", "created_at": "current_date", "updated_at": "current_date"}
                  ]


# Navigating docker-compose

Once you have completed your database run ` docker-compose up --build `
You can work on your backend endpoints in Backend/src/app.ts and it will show your changes at each localhost:8080.
    (Keep in mind and changes to the actual database you will need to ` docker-compose down ` and ` docker-compose up --build ` to see these new changes)

To close down your docker containers

    In the teminal

    - Press L-ctrl + C
    - ` docker-compose down `



