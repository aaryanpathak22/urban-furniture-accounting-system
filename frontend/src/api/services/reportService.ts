import api from "../axios";


export const getReports = async () => {

    const response = await api.get("/reports");

    return response.data;

};

export const getLedger = async () => {

    return [

        {
            id: "1",
            accountName: "Cash Account",
            date: "2026-01-01",
            description: "Opening Balance",
            debit: 50000,
            credit: 0,
            balance: 50000
        },

        {
            id: "2",
            accountName: "Sales Account",
            date: "2026-01-05",
            description: "Customer Payment Received",
            debit: 0,
            credit: 25000,
            balance: 75000
        },

        {
            id: "3",
            accountName: "Purchase Account",
            date: "2026-01-10",
            description: "Material Purchase",
            debit: 15000,
            credit: 0,
            balance: 60000
        }

    ];

};