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

CREATE TYPE tipo_identificacion AS ENUM ('RUC', 'cedula', 'pasaporte');
CREATE TYPE tipo_cuenta AS ENUM ('ahorro', 'corriente');
CREATE TYPE tipo_documento AS ENUM ('cedula', 'RUC', 'pasaporte');
CREATE TYPE tipo_banco AS ENUM ('banco_a', 'banco_b', 'banco_c');

CREATE TABLE registro_agricultor (
    id SERIAL PRIMARY KEY,
    tipo_identificacion tipo_identificacion NOT NULL,
    numero_identificacion VARCHAR(50) NOT NULL UNIQUE,
    nombres_apellidos VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    provincia VARCHAR(255) NOT NULL,
    canton VARCHAR(255) NOT NULL,
    cuenta_bancaria JSONB NOT NULL,
    direccion TEXT NOT NULL,
    ubicacion_google_maps TEXT,
    telefono VARCHAR(50),
    productos_interes TEXT[],
    numero_hectareas DECIMAL,
    cantidad_hectareas_siembras DECIMAL,
    asociacion_id INTEGER,
    nueva_asociacion VARCHAR(255),
    acceso_internet BOOLEAN,
    acepto_terminos BOOLEAN NOT NULL
);

CREATE TABLE registro_comerciante (
    id SERIAL PRIMARY KEY,
    tipo_identificacion tipo_identificacion NOT NULL,
    numero_identificacion VARCHAR(50) NOT NULL UNIQUE,
    nombres_apellidos VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    provincia VARCHAR(255) NOT NULL,
    canton VARCHAR(255) NOT NULL,
    cuenta_bancaria JSONB NOT NULL,
    direccion TEXT NOT NULL,
    ubicacion_google_maps TEXT,
    telefono VARCHAR(50),
    productos_interes TEXT[],
        centro_acopio BOOLEAN,
    capacidad_secado DECIMAL,
    capacidad_almacenamiento BOOLEAN,
    capacidad DECIMAL,
    acceso_internet BOOLEAN,
    acepto_terminos BOOLEAN NOT NULL
);

CREATE TABLE registro_comerciante_agroquimicos (
    id SERIAL PRIMARY KEY,
    tipo_identificacion tipo_identificacion NOT NULL,
    numero_identificacion VARCHAR(50) NOT NULL UNIQUE,
    nombres_apellidos VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    provincia VARCHAR(255) NOT NULL,
    canton VARCHAR(255) NOT NULL,
    cuenta_bancaria JSONB NOT NULL,
    direccion TEXT NOT NULL,
    ubicacion_google_maps TEXT,
    telefono VARCHAR(50),
    productos_interes TEXT[],
    numero_hectareas DECIMAL,
    cantidad_hectareas_siembras DECIMAL,
    asociacion_id INTEGER,
    nueva_asociacion VARCHAR(255),
    acceso_internet BOOLEAN,
    acepto_terminos BOOLEAN NOT NULL
);

CREATE TABLE registro_asociacion_agricola (
    id SERIAL PRIMARY KEY,
    tipo_identificacion tipo_identificacion NOT NULL,
    numero_identificacion VARCHAR(50) NOT NULL UNIQUE,
    nombres_apellidos VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    provincia VARCHAR(255) NOT NULL,
    canton VARCHAR(255) NOT NULL,
    cuenta_bancaria JSONB NOT NULL,
    direccion TEXT NOT NULL,
    ubicacion_google_maps TEXT,
    telefono VARCHAR(50),
    productos_interes TEXT[],
    centro_acopio BOOLEAN,
    capacidad_secado DECIMAL,
    capacidad_almacenamiento BOOLEAN,
    capacidad DECIMAL,
    numero_hectareas DECIMAL,
    cantidad_hectareas_siembras DECIMAL,
    acceso_internet BOOLEAN,
    acepto_terminos BOOLEAN NOT NULL
);

CREATE TABLE publica_tu_oferta (
    id SERIAL PRIMARY KEY,
    precio DECIMAL NOT NULL,
    unidad VARCHAR(50) NOT NULL,
    cantidad DECIMAL NOT NULL,
    presentacion_entrega VARCHAR(255) NOT NULL,
    parametros_calidad JSONB,
    fecha_entrega DATE NOT NULL,
    imagenes TEXT[]
);

CREATE TABLE productos_interes_vendedor (
    id SERIAL PRIMARY KEY,
    producto_interes TEXT NOT NULL,
    unidad VARCHAR(50) NOT NULL,
    parametros_calidad BOOLEAN,
    parametros_calidad_detalle JSONB,
    aplica_tabla_castigos BOOLEAN,
    tabla_castigos JSONB
);

CREATE TABLE propuesta_venta (
    id SERIAL PRIMARY KEY,
    precio DECIMAL NOT NULL,
    unidad VARCHAR(50) NOT NULL,
    cantidad DECIMAL NOT NULL,
    presentacion VARCHAR(50) NOT NULL,
    peso VARCHAR(50) NOT NULL,
    fecha_entrega DATE NOT NULL,
    informacion_adicional TEXT
);

CREATE TYPE estado_orden AS ENUM ('Pendiente de entrega', 'En camino', 'Recibido Esperando', 'Aceptado', 'Rechazado');

CREATE TABLE ordenes (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER NOT NULL,
    precio DECIMAL NOT NULL,
    unidad VARCHAR(50) NOT NULL,
    cantidad DECIMAL NOT NULL,
    fecha DATE NOT NULL,
    estado estado_orden NOT NULL,
    CONSTRAINT fk_producto FOREIGN KEY (producto_id) REFERENCES productos(id)
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

CREATE TABLE calificacion_comprador (
    id SERIAL PRIMARY KEY,
    calificacion INTEGER CHECK (calificacion >= 1 AND calificacion <= 5)
);

CREATE TABLE calificacion_vendedor (
    id SERIAL PRIMARY KEY,
    calificacion INTEGER CHECK (calificacion >= 1 AND calificacion <= 5)
);

CREATE TABLE categoria_insumo (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE publica_insumo (
    id SERIAL PRIMARY KEY,
    categoria_insumo_id INTEGER NOT NULL,
    nombre_comercial VARCHAR(255) NOT NULL,
    precio_agroec DECIMAL NOT NULL,
    precio_mas_iva BOOLEAN NOT NULL,
    precio_punto_venta DECIMAL NOT NULL,
    stock INTEGER NOT NULL,
    imagenes TEXT[],
    composicion TEXT,
    clase TEXT,
    tipo_formula TEXT,
    titular TEXT,
    clasificacion TEXT,
    instrucciones_uso TEXT,
    cultura TEXT,
    modo_aplicacion TEXT,
    epoca_intervalo TEXT,
    intervalo_entrada TEXT,
    link TEXT,
    atencion TEXT,
    CONSTRAINT fk_categoria_insumo FOREIGN KEY (categoria_insumo_id) REFERENCES categoria_insumo(id)
);

CREATE TABLE bandeja_mensajes_comprador (
    id SERIAL PRIMARY KEY,
    mensaje TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bandeja_mensajes_vendedor (
    id SERIAL PRIMARY KEY,
    mensaje TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO registro_asociacion_agricola (
    tipo_identificacion, numero_identificacion, nombres_apellidos, correo, clave, provincia, canton, cuenta_bancaria,
    direccion, ubicacion_google_maps, telefono, productos_interes, centro_acopio, capacidad_secado,
    capacidad_almacenamiento, capacidad, numero_hectareas, cantidad_hectareas_siembras, acceso_internet, acepto_terminos
) VALUES (
    'RUC', '1790011144003', 'Asociacion Agricola XYZ', 'contacto@agricola.xyz', 'asociacionpass', 'Los Rios', 'Babahoyo',
    '{"numero_cuenta": "3344556677", "tipo_cuenta": "corriente", "banco": "banco_a", "nombre_propietario": "Asociacion Agricola XYZ", "tipo_documento": "RUC", "numero_documento": "1790011144003"}',
    'Km 5 via a Vinces', 'https://maps.google.com/?q=-1.7985600,-79.5346400', '0965432109', '{"cacao"}', TRUE, 8.0, TRUE, 200.0, 50.0, 30.0, TRUE, TRUE
);

INSERT INTO publica_tu_oferta (
    precio, unidad, cantidad, presentacion_entrega, parametros_calidad, fecha_entrega, imagenes
) VALUES (
    10.5, 'Kg', 500, 'En sacos de 50 libras',
    '[{"nombre": "Humedad", "minimo": 10, "maximo": 12}, {"nombre": "Impurezas", "minimo": 1, "maximo": 2}]',
    '2024-08-15', '{"img1.jpg", "img2.jpg", "img3.jpg"}'
);

INSERT INTO productos_interes_vendedor (
    producto_interes, unidad, parametros_calidad, parametros_calidad_detalle, aplica_tabla_castigos, tabla_castigos
) VALUES (
    'Cacao', 'Kg', TRUE,
    '[{"nombre": "Humedad", "minimo": 10, "maximo": 12}, {"nombre": "Impurezas", "minimo": 1, "maximo": 2}]',
    TRUE,
    '[{"Imp-Hum": 1, "1%": 0.5, "2%": 1.0, "3%": 1.5, "4%": 2.0, "5%": 2.5, "6%": 3.0, "7%": 3.5, "8%": 4.0, "9%": 4.5, "10%": 5.0}]'
);

INSERT INTO propuesta_venta (
    precio, unidad, cantidad, presentacion, peso, fecha_entrega, informacion_adicional
) VALUES (
    9.8, 'Kg', 1000, 'En sacos', '50 libras', '2024-08-20', 'Entregar en el almacén central'
);

INSERT INTO ordenes (
    producto_id, precio, unidad, cantidad, fecha, estado
) VALUES (
    1, 9.8, 'Kg', 1000, '2024-08-20', 'Pendiente de entrega'
);