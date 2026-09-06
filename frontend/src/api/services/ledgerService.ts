import axios from "../axios";


export interface LedgerEntry {

    id?: string;
    accountName?: string;
    accountCode?: string;
    debit?: number;
    credit?: number;
    balance?: number;
    transactionDate?: string;
    description?: string;

}


export const getLedger = async (): Promise<LedgerEntry[]> => {

    try {

        const response = await axios.get("/ledger");

        return response.data;

    } catch(error) {

        console.error(
            "Failed to fetch ledger entries",
            error
        );

        return [];

    }

};