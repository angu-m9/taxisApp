import ClienteModel from "../models/clienteModel.js";

export const getAllClientes = async (_req, res) => {
    try {
        const clientes = await ClienteModel.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createCliente = async (req, res) => {
    try {
        await ClienteModel.create(req.body);
        res.json({ message: "Cliente creado exitosamente!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


