const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString = 'postgres://camcielxatmdbb:f36485f8e014f5f9ab0e3b4c2c27df40c282141e5ff633607df082d3f16c3123@ec2-54-162-119-125.compute-1.amazonaws.com:5432/d8aoievaiag701';

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async (req, res) =>{
    res.status(200).json({
        message: 'Bienvenido putito'
    });
}

const getSongs = async (req, res) =>{
    const response = await pool.query('SELECT * FROM songs;');
    res.status(200).json(response.rows);
}

module.exports = {
    welcome,
    getSongs
};