import TaxiModel from "../models/taxiModel.js";

export const getAllTaxis = async (_req, res) => {
    try {
        const taxis = await TaxiModel.findAll();
        res.json(taxis);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export const createTaxi = async (req, res) => {
    try {
        await TaxiModel.create(req.body);
        res.json({ message: "Taxi creado exitosamente!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const deleteTaxi = async (req, res) => {
    try {
        await TaxiModel.destroy({ where: { ID_Taxi: req.params.id }});
        res.json({ message: 'El taxi ha sido eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTaxi = async (req, res) => {
    try {
        await TaxiModel.update(req.body, { where: { ID_Taxi: req.params.id }});
        res.json({ message: 'El taxi ha sido actualizado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const patchTaxi = async (req, res) => {
    try {
        const id = req.params.id //req.params.id filtra el id del objeto url
        const taxi = await TaxiModel.findOne({ where: { ID_Taxi: id } });
        if (!taxi) {
            return res.status(404).json({ message: 'Taxi no encontrado' });
        }
        await TaxiModel.update(req.body, { where: { ID_Taxi: id }});
        res.json({ message: 'El taxi ha sido actualizado parcialmente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
