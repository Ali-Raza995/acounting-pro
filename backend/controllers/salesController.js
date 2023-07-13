import Sales from "../models/salesModel.js";

//for add or fetch
export const getSalesController = async (req, res) => {
    try {
        const bills = await Sales.find()
        res.send(bills)

    } catch(error) {
        console.log(error)
    }
}
