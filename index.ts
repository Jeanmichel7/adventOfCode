import { getDataOfDay } from "./src/utils/puppeteers";
import { initNewFile } from "./src/utils/file";

const today = new Date();
const day: number = today.getDate();

const main = async () => {
  const data = await getDataOfDay(day);
  initNewFile(day, data);
};

main();
