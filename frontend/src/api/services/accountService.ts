import axios from "../axios";


export interface Account {

    id: string;

    accountName: string;

    accountType: string;

    balance: number;

    status: string;

}



interface AccountApiResponse {

    id?: string;

    _id?: string;

    accountId?: string;

    accountName?: string;

    accountType?: string;

    currentBalance?: number;

    balance?: number;

    accountStatus?: string;

    status?: string;

}




export const getAccounts = async (): Promise<Account[]> => {


    try {


        const response =
            await axios.get<AccountApiResponse[]>(
                "/accounts"
            );



        console.log(
            "Accounts API:",
            response.data
        );



        if (!Array.isArray(response.data)) {

            return [];

        }




        return response.data.map(
            (account: AccountApiResponse): Account => ({


                id:

                    account.id
                    ??
                    account._id
                    ??
                    account.accountId
                    ??
                    "",



                accountName:

                    account.accountName
                    ??
                    "Unknown",



                accountType:

                    account.accountType
                    ??
                    "-",



                balance:

                    Number(
                        account.currentBalance
                        ??
                        account.balance
                        ??
                        0
                    ),



                status:

                    account.accountStatus
                    ??
                    account.status
                    ??
                    "Inactive"


            })
        );



    } catch(error) {


        console.error(
            "Failed loading accounts",
            error
        );


        return [];

    }


};