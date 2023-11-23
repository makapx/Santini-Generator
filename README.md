# Santini-Generator
Generatore di santini per le elezioni politiche.

# Demo

[Live Demo](https://unict-dmi.github.io/Santini-Generator/)

### Running with Docker

#### Building and running locally

1. Clone the repository:
2. Build the image:
```bash
    $ cd Santini-Generator
    $ docker build -t santini-gen .
```
3. Run:
```bash
$ docker run --name santini-gen -p 4200:4200 santini-gen
```

4. Go to http://localhost:4200