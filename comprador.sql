CREATE TABLE puntos_recepcion (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    ubicacion_google_maps TEXT,
    direccion TEXT
);

CREATE TYPE tipo_dentificacion AS ENUM ('RUC', 'cedula', 'pasaporte');
CREATE TYPE tipo_egocio AS ENUM ('Industrial', 'Comercial', 'Intermediario');

CREATE TABLE registro (
    id SERIAL PRIMARY KEY,
    razon_social VARCHAR(255) NOT NULL,
    tipo_identificacion tipo_identificacion NOT NULL,
    numero_identificacion VARCHAR(50) NOT NULL UNIQUE,
    correo VARCHAR(255) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    provincia VARCHAR(255) NOT NULL,
    canton VARCHAR(255) NOT NULL,
    direccion TEXT NOT NULL,
    ubicacion_google_maps TEXT,
    telefono VARCHAR(50),
    contacto_1 JSONB,
    contacto_2 JSONB,
    contacto_3 JSONB,
    actividad_economica TEXT,
    tipo_negocio tipo_negocio,
    consumo_mes_tm DECIMAL,
    consumo_anual DECIMAL,
    presupuesto_mes DECIMAL,
    politicas_recepcion TEXT,
    acepto_terminos BOOLEAN NOT NULL,
    puntos_recepcion INTEGER[]
);

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    unidad VARCHAR(50) NOT NULL
);

CREATE TABLE unidad (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE productos_interes (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER NOT NULL,
    unidad_id INTEGER NOT NULL,
    parametros_calidad BOOLEAN,
    parametros_calidad_detalle JSONB,
    aplica_tabla_castigos BOOLEAN,
    tabla_castigos JSONB,
    CONSTRAINT fk_producto FOREIGN KEY (producto_id) REFERENCES productos(id),
    CONSTRAINT fk_unidad FOREIGN KEY (unidad_id) REFERENCES unidad(id)
);

CREATE TABLE producto_licitar (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER NOT NULL,
    precio DECIMAL NOT NULL,
    unidad_id INTEGER NOT NULL,
    cantidad DECIMAL NOT NULL,
    presentacion_entrega VARCHAR(255) NOT NULL,
    parametros_calidad JSONB,
    valida_hasta DATE NOT NULL,
    informacion_adicional TEXT,
    CONSTRAINT fk_producto FOREIGN KEY (producto_id) REFERENCES productos(id),
    CONSTRAINT fk_unidad FOREIGN KEY (unidad_id) REFERENCES unidad(id)
);

CREATE TABLE propuesta_compra (
    id SERIAL PRIMARY KEY,
    precio DECIMAL NOT NULL,
    unidad_id INTEGER NOT NULL,
    cantidad DECIMAL NOT NULL,
    presentacion_entrega VARCHAR(255) NOT NULL,
    ubicacion_google_maps TEXT,
    horarios TEXT,
    valida_hasta DATE NOT NULL,
    informacion_adicional TEXT,
    CONSTRAINT fk_unidad FOREIGN KEY (unidad_id) REFERENCES unidad(id)
);

CREATE TABLE chat (
    id SERIAL PRIMARY KEY,
    mensaje TEXT NOT NULL,
    comprador BOOLEAN NOT NULL,
    push_notificacion BOOLEAN
);

CREATE TABLE condiciones_compra (
    id SERIAL PRIMARY KEY,
    precio DECIMAL NOT NULL,
    unidad_id INTEGER NOT NULL,
    cantidad DECIMAL NOT NULL,
    num_entregas INTEGER NOT NULL,
    fecha_entrega DATE NOT NULL,
    hora_entrega TIME NOT NULL,
    parametros_calidad JSONB,
    modo_pago VARCHAR(50) NOT NULL,
    porcentaje_inicial DECIMAL NOT NULL,
    modo_pago_final VARCHAR(50) NOT NULL,
    porcentaje_final DECIMAL NOT NULL,
    notas TEXT,
    precio_puesto_domicilio BOOLEAN NOT NULL,
    CONSTRAINT fk_unidad FOREIGN KEY (unidad_id) REFERENCES unidad(id)
);

CREATE TYPE estado_orden AS ENUM ('Pago en garantía', 'Pendiente de entrega', 'En camino', 'En espera', 'No llego', 'Recibido Aceptado', 'Rechazado');

CREATE TABLE ordenes (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER NOT NULL,
    precio DECIMAL NOT NULL,
    unidad_id INTEGER NOT NULL,
    cantidad DECIMAL NOT NULL,
    fecha DATE NOT NULL,
    estado estado_orden NOT NULL,
    CONSTRAINT fk_producto FOREIGN KEY (producto_id) REFERENCES productos(id),
    CONSTRAINT fk_unidad FOREIGN KEY (unidad_id) REFERENCES unidad(id)
);

CREATE TABLE garantias (
    id SERIAL PRIMARY KEY,
    garantia DECIMAL NOT NULL,
    devolucion DECIMAL
);

CREATE TABLE billetera (
    id SERIAL PRIMARY KEY,
    fee_agroec DECIMAL,
    devolucion DECIMAL,
    recarga DECIMAL
);

CREATE TABLE metodo_pago (
    id SERIAL PRIMARY KEY,
    tipo_pago VARCHAR(50) NOT NULL,
    monto_recarga DECIMAL NOT NULL
);

CREATE TABLE sugerir_producto (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER NOT NULL,
    cantidad DECIMAL NOT NULL,
    CONSTRAINT fk_producto FOREIGN KEY (producto_id) REFERENCES productos(id)
);

CREATE TABLE roles_usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    clave VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL
);

CREATE TABLE notificaciones_ordenes (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER NOT NULL,
    orden_id INTEGER NOT NULL,
    descripcion TEXT,
    CONSTRAINT fk_producto FOREIGN KEY (producto_id) REFERENCES productos(id),
    CONSTRAINT fk_orden FOREIGN KEY (orden_id) REFERENCES ordenes(id)
);

INSERT INTO unidad (nombre) VALUES
('Kg'),
('G'),
('Mg');

INSERT INTO producto_licitar (producto_id, precio, unidad_id, cantidad, presentacion_entrega, parametros_calidad, valida_hasta, informacion_adicional) VALUES
(1, 1.5, 1, 100, 'En sacos de 50 libras', '[{"nombre": "Peso", "minimo": 200, "maximo": 300}]', '2024-12-31', 'Producto en excelente estado');

INSERT INTO propuesta_compra (precio, unidad_id, cantidad, presentacion_entrega, ubicacion_google_maps, horarios, valida_hasta, informacion_adicional) VALUES
(1.4, 1, 150, 'En sacos de 50 libras', 'https://goo.gl/maps/example1', 'Lunes a Viernes de 8:00 a 18:00', '2024-12-31', 'Propuesta válida para entrega inmediata');

INSERT INTO chat (mensaje, comprador, push_notificacion) VALUES
('¿Cuál es el precio por tonelada?', TRUE, TRUE),
('El precio por tonelada es $1,500.', FALSE, TRUE);

INSERT INTO condiciones_compra (precio, unidad_id, cantidad, num_entregas, fecha_entrega, hora_entrega, parametros_calidad, modo_pago, porcentaje_inicial, modo_pago_final, porcentaje_final, notas, precio_puesto_domicilio) VALUES
(1.5, 1, 100, 5, '2024-07-10', '08:00', '[{"nombre": "Peso", "minimo": 200, "maximo": 300}]', 'Modo garantia', 50, 'Pago en sitio', 50, 'Entregar antes del mediodía', TRUE);

INSERT INTO ordenes (producto_id, precio, unidad_id, cantidad, fecha, estado) VALUES
(1, 1.5, 1, 100, '2024-07-01', 'Pendiente de entrega');

INSERT INTO garantias (garantia, devolucion) VALUES
(1000, 1000);

INSERT INTO billetera (fee_agroec, devolucion, recarga) VALUES
(10, 0, 1000);

INSERT INTO metodo_pago (tipo_pago, monto_recarga) VALUES
('TC', 1000),
('Transferencia', 2000);

INSERT INTO sugerir_producto (producto_id, cantidad) VALUES
(1, 200);

INSERT INTO roles_usuarios (nombre, correo, clave, rol) VALUES
('Administrador', 'admin@example.com', 'admin123', 'admin'),
('Usuario', 'user@example.com', 'user123', 'user');

INSERT INTO notificaciones_ordenes (producto_id, orden_id, descripcion) VALUES
(1, 1, 'La orden está pendiente de entrega');

INSERT INTO productos_interes (producto_id, unidad_id, parametros_calidad, parametros_calidad_detalle, aplica_tabla_castigos, tabla_castigos) VALUES
(1, 1, TRUE, '[{"nombre": "Peso", "minimo": 200, "maximo": 300}, {"nombre": "Madurez", "minimo": 5, "maximo": 8}]', TRUE, '{"Imp-Hum": 2, "1%": 1, "2%": 2, "3%": 3, "4%": 4, "5%": 5, "6%": 6, "7%": 7, "8%": 8, "9%": 9, "10%": 10}');
