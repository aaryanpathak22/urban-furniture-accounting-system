import axios from "../axios";

export interface Report {
  id?: string;
  reportId: string;
  reportType: string;
  reportName: string;
  period: string;
  data: Record<string, unknown>;
  generatedBy: string;
  status: string;
  createdAt: string;
}


/*
 * Reports
 */
export const getReports = async (): Promise<Report[]> => {
  try {
    const response = await axios.get("/reports");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch reports", error);
    return [];
  }
};


/*
 * Ledger
 * Required by Ledger.tsx
 */
export const getLedger = async (): Promise<unknown[]> => {
  try {
    const response = await axios.get("/ledger");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch ledger", error);
    return [];
  }
};


/*
 * Generate report
 */
export const generateReport = async (
  reportType: string
): Promise<Report | null> => {
  try {
    const response = await axios.post("/reports/generate", {
      reportType,
    });

    return response.data;
  } catch (error) {
    console.error("Failed to generate report", error);
    return null;
  }
};