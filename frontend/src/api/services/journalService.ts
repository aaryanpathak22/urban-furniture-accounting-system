import axios from "../axios";


export interface Journal {


    id: string;

    journalNumber: string;

    date: string;

    reference: string;

    description: string;

    debit: number;

    credit: number;


}



export const getJournals = async (): Promise<Journal[]> => {


    try {


        const response = await axios.get("/journals");


        const data = response.data;



        if (!Array.isArray(data)) {

            return [];

        }



        return data.map(

            (journal: Record<string, unknown>): Journal => ({


                id:
                    String(
                        journal.id ?? ""
                    ),



                journalNumber:
                    journal.journalNumber
                        ? String(journal.journalNumber)
                        : "JE-" + String(journal.id).slice(-5),



                date:
                    journal.journalDate
                        ? String(journal.journalDate)
                        : "-",



                reference:
                    journal.referenceId
                        ? String(journal.referenceId)
                        : "-",



                description:
                    journal.description
                        ? String(journal.description)
                        : "Journal Entry",



                debit:
                    Number(
                        journal.totalDebit ?? 0
                    ),



                credit:
                    Number(
                        journal.totalCredit ?? 0
                    )



            })

        );


    } catch(error) {


        console.error(
            "Failed to fetch journals",
            error
        );


        return [];


    }


};