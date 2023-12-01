# Santini-Generator
Generatore di santini per le elezioni politiche.

## Demo

[Live Demo](https://unict-dmi.github.io/Santini-Generator/)

## Running with Docker and docker-compose

### Building and running locally

1. Clone the repository:
2. Go to project folder:
    ```bash
        $ cd Santini-Generator
    ```
3. For production environment run:
    ```bash
        $ ./start.sh
    ```
4. For development environment run:
    ```bash
    $ ./start.sh dev
    ```

5. Go to: ```http://localhost```

## Using Docker Compose

### Remote repository
```yaml
version: '2'
services:
  santini-gen:
    image: ghcr.io/unict-dmi/santini-generator:master
    container_name: santini-gen
    ports:
      - "80:80/tcp"
    restart: unless-stopped

```

### Local repository

```yaml
version: '3.8'
services:
  santini-gen:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: santini-gen
    ports:
      - "80:80/tcp"
    restart: unless-stopped

```
