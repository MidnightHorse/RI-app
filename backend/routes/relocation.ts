import express, {Request, Response} from 'express';

const router = express.Router();

interface CityData{
    rent: number;
    grocercies: number;
    transport: number;
}

interface RelocationRequest extends Request{
    body:{
        city1: string;
        city2: string;
        movingDistance: number;
        budget: number;
    };
}
//Input city data, for example
const cityData: Record<string, CityData> ={
    'New York': {rent: 2500, grocercies: 500, transport: 200},
    'Los Angeles': {rent: 2200, grocercies: 450, transport: 150}
};
//Calculation
router.post('calculate', (req: RelocationRequest, res: Response) => {
    const {city1, city2, movingDistance, budget} = req.body;

    const city1Data = cityData[city1];
    const city2Data = cityData[city2];

    if(!city1Data || !city2Data){
        return res.status(400).json({error: 'City data is not available' });
    }
    const costDiff = {
        rent: city2Data.rent - city1Data.rent,
        grocercies: city2Data.grocercies - city1Data.grocercies,
        transport: city2Data.transport - city1Data.transport,
    };

    const totalC = movingDistance * 0.5 + budget;

    res.json({costDiff, totalC});
});

export default router;