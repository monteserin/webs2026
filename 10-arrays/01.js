const nombres = ["Juan", "Roberto", "Paco", "Sofía", "Mónico"];

for (let i = 0; i < nombres.length; i++) {
  console.log("Conozco a alguien llamado " + nombres[i]);
}

for (nombre of nombres) {
  console.log("Conozco a alguien llamdo  " + nombre);
}

for (i in nombres) {
  console.log("Conozco a alguien llamdo  " + nombres[i]);
}
