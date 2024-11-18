import React, {useState} from 'react';

interface RelocationFormProps {
    onSubmit: (data: RelocationData) => void;
}

interface RelocationData {
    city1: string;
    city2: string;
    movingDistance: number;
    budget: number;
}

const RelocationForm: React.FC<RelocationFormProps> =({ onSubmit }) => {
    const[city1, setCity1] = useState<string>('');
    const[city2, setCity2] = useState<string>('');
    const[movingDistance, setMovingDistance] = useState<number>(0);
    const[budget, setBudget] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            city1, city2, movingDistance, budget
        });
    };
    return (
        <form onSubmit={handleSubmit}>
        <label>
            City 1:
            <input type = "text" value = {city1} onChange={(e) => setCity1(e.target.value)} />
        </label>
        <label>
            City 2:
            <input type = "text" value = {city2} onChange={(e) => setCity2(e.target.value)} />
        </label>
        <label>
            Moving Distance (Miles):
            <input type ="number" value={movingDistance} onChange={(e) =>setMovingDistance(Number(e.target.value))} />
        </label>
        <label>
            Budget ($):
            <input type = "number" value={budget} onChange={(e) =>setBudget(Number(e.target.value))}/>
        </label>
        <button type = "submit">Calculate</button>
        </form>
    );
};

export default RelocationForm;