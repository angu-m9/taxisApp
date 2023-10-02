CREATE database Reservas_taxi;
USE Reservas_taxi;

CREATE TABLE Clientes (
  ID_Cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador único para cada cliente',
  Nombre varchar(255) NOT NULL,
  Correo varchar(255) NOT NULL,
  Telefono varchar(255)
);

CREATE TABLE Taxis (
  ID_Taxi INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador único para cada taxi o chofer',
  NombreChofer varchar(255) NOT NULL,
  Placa varchar(255) NOT NULL,
  Estado varchar(255) NOT NULL,
  TipoVehiculo varchar(255),
  AsientosInfantiles varchar(255) NOT NULL
);

CREATE TABLE Reservas (
  ID_Reserva INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador único para cada reserva',
  ID_Cliente INT NOT NULL,
  ID_Taxi INT,
  Direccion_Origen varchar(255) NOT NULL,
  Direccion_Destino varchar(255) NOT NULL,
  FechaHora timestamp NOT NULL,
  URL_Confirmacion varchar(255),
  ImporteTraslado decimal,
  NecesitaAsientosInfantiles varchar(255) NOT NULL
);

CREATE TABLE Transacciones (
  ID_Transaccion INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador único para cada transacción',
  ID_Reserva INT NOT NULL,
  Monto decimal NOT NULL,
  MetodoPago varchar(255) NOT NULL,
  EstadoTransaccion varchar(255) NOT NULL
);

CREATE TABLE Lugares (
  ID_Lugar INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador único para cada lugar',
  Nombre varchar(255) NOT NULL,
  Direccion varchar(255),
  CodigoPostal varchar(255),
  Ciudad varchar(255) NOT NULL,
  Provincia_Estado varchar(255)
);

INSERT INTO Clientes (Nombre, Correo, Telefono)
VALUES ('Juan Pérez', 'juan.perez@email.com', '123-456-7890'),
       ('Maria García', 'maria.garcia@email.com', '098-765-4321');

INSERT INTO Taxis (NombreChofer, Placa, Estado, TipoVehiculo, AsientosInfantiles)
VALUES ('Carlos López', 'ABC123', 'Disponible', 'Sedán', 'No'),
       ('Ana Torres', 'XYZ789', 'Ocupado', 'Minivan', 'Sí');

INSERT INTO Reservas (ID_Cliente, ID_Taxi, Direccion_Origen, Direccion_Destino, FechaHora, URL_Confirmacion, ImporteTraslado, NecesitaAsientosInfantiles)
VALUES (1, 1, 'Calle Falsa 123', 'Avenida Siempre Viva 456', NOW(), 'http://confirmacion1.com', 50.00, 'No'),
       (2, 2, 'Avenida Siempre Viva 456', 'Calle Falsa 123', NOW(), 'http://confirmacion2.com', 60.00, 'Sí');

INSERT INTO Transacciones (ID_Reserva, Monto, MetodoPago, EstadoTransaccion)
VALUES (1, 50.00, 'Tarjeta de Crédito', 'Aprobada'),
       (2, 60.00, 'PayPal', 'Pendiente');

INSERT INTO Lugares (Nombre, Direccion, CodigoPostal, Ciudad, Provincia_Estado)
VALUES ('Aeropuerto Internacional', 'Calle Aeropuerto 1', '00001', 'CiudadVilla', 'ProvinciaA'),
       ('Estación Central', 'Avenida Trenes 2', '00002', 'CiudadVilla', 'ProvinciaA');