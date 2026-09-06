import api from "../axios";


export interface Setting {

    id: string;

    settingId: string;

    settingType: string;

    key: string;

    value: Record<string, unknown>;

    status: string;

    updatedAt: string;

}



export const getSettings = async (): Promise<Setting[]> => {

    try {

        const response = await api.get("/settings");

        return response.data;

    } catch (error) {

        console.error(
            "Failed to fetch settings",
            error
        );

        return [];

    }

};