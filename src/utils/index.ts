export const log = (
  message: string,
  level: "INFO" | "ERROR" | "WARN" = "INFO"
) => {
  console.log(`[${new Date().toISOString()}][${level}]: ${message}`);
};

export const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
