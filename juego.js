class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  getDetalles() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Edad: ${this.edad}`);
  }
}

class Jugador extends Persona {
  constructor(nombre, apellido, edad, posicion) {
    super(nombre, apellido, edad);
    this.posicion = posicion;
  }

  getDetalles() {
    super.getDetalles();
    console.log(`Posición: ${this.posicion}`);
  }
}

class Entrenador extends Persona {
  constructor(nombre, apellido, edad, experiencia, idFederacion) {
    super(nombre, apellido, edad);
    this.experiencia = experiencia;
    this.idFederacion =
      idFederacion || Math.floor(Math.random() * 90000) + 10000;
  }

  getDetalles() {
    super.getDetalles();
    console.log(`Experiencia: ${this.experiencia} años`);
    console.log(`ID de Federación: ${this.idFederacion}`);
  }
}

class Equipo {
  constructor(entrenador, jugadores) {
    this.entrenador = entrenador;
    this.jugadores = jugadores;
  }

  getDetalles() {
    console.log("Detalles entrenador");
    this.entrenador.getDetalles();

    console.log("Detalles jugadores");
    this.jugadores.forEach((jugador, index) => {
      console.log(`Jugador ${index + 1}`);
      jugador.getDetalles();
      console.log(".....................................");
    });
  }
}

const jugadores = [
  new Jugador("Jugador 1", "Apellido 1", 20, "Portero"),
  new Jugador("Jugador 2", "Apellido 2", 22, "Defensa"),
  new Jugador("Jugador 3", "Apellido 3", 25, "Medio"),
  new Jugador("Jugador 4", "Apellido 4", 28, "Delantero"),
];

const entrenador = new Entrenador("Entrenador", "Apellido Entrenador", 40, 10);

const equipo = new Equipo(entrenador, jugadores);

equipo.getDetalles();
