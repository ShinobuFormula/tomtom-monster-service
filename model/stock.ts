import mongoose from "mongoose";
import { FightMonster, Stock } from "./interfaces/monster";

const stockSchema = new mongoose.Schema<Stock>({
    pc: [{
        type: Object,
        required: false,
    }]
});

const stockModel = mongoose.model("Stock", stockSchema);

const addMonsterToStock = async (id: string, monster: FightMonster) => {
    const stock = await stockModel.findById(id);
    stock.pc.push(monster);
    return stock.save();
}

const removeMonsterFromStock = async (id: string, monsterId: string) => {
    return await stockModel.updateOne(
        { _id: id },
        { $pull: { pc: { _id: monsterId } } }
    )
}

const updateStockMonster = async (id: string, monster: FightMonster) => {
    return await stockModel.updateOne({ _id: id, 'pc._id': monster._id }, {
        $set: { 'pc.$': monster }
    })
}

const getAllStocks = async () => {
    const stock = await stockModel.find()
    return stock;
};

const getStockById = async (id: string) => {
    const stock = await stockModel.findById(id)
    return stock;
};

export { addMonsterToStock, removeMonsterFromStock, getAllStocks, getStockById, updateStockMonster }