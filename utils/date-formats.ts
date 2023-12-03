import dayjs from "dayjs";
import isTodayPlugin from "dayjs/plugin/isToday";
dayjs.extend(isTodayPlugin);

export function quickFormat(dateString: string) {
  const date = dayjs(dateString, "YYYYMMDDHHmmss");
  if (date.isToday()) {
    return date.format("hh:mm:ss a");
  } else {
    return date.format("DD/MM/YYYY HH:mm:ss");
  }
}
