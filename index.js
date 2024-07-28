const express = require('express');
const sequelize = require('./config/database');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Rutas
const productRoutes = require('./routes/products');
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi tienda en línea!');
});

// Sincronizar base de datos
sequelize.sync()
  .then(() => {
    console.log('Conectado a la base de datos y modelos sincronizados');
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
