# Santini-Generator
Generatore di santini per le elezioni politiche.

## Demo

[Live Demo](https://unict-dmi.github.io/Santini-Generator/)

## Running with Docker

### Building and running locally

1. Clone the repository:
2. Build the image:
    ```bash
        $ cd Santini-Generator
        $ docker build -t santini-gen .
    ```
3. Run:
    ```bash
    $ docker run --name santini-gen -p 80:80 santini-gen
    ```

4. Go to: ```http://localhost```

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
