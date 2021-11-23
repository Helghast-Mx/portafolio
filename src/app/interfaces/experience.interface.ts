export interface Experience {
    ciclo:       string;
    descripcion: string;
    empresa:     string;
    proyecto1:   string;
    proyecto2:   string;
    proyects:    Proyect[];
    titulo:      string;
    prueba?:     string;
}

interface Proyect {
    dos:        string;
    proyectDos: string;
    proyectUno: string;
    uno:        string;
    cuatro?:    string;
    tres?:      string;
    statusUno?: string;
    statusDos?: string;
}
