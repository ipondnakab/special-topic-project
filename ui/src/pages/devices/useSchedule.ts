import React from "react";
import swal from "sweetalert2";
import { Schedule } from "../../interfaces/schedule";
import {
  createSchedule,
  deleteSchedule,
  getScheduleByDeviceId,
  updateSchedule,
} from "../../apis/schedules";

export const deviceContext = React.createContext<
  ReturnType<typeof useSchedule>
>({} as ReturnType<typeof useSchedule>);

export const useScheduleContext = () => React.useContext(deviceContext);

function useSchedule() {
  const [deviceId, setDeviceId] = React.useState<string>("1");
  const [schedule, setSchedule] = React.useState<Schedule[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getAllSchedule = React.useCallback(async () => {
    try {
      const response = await getScheduleByDeviceId(deviceId);
      if (!response) return;
      setSchedule(response);
    } catch (error) {
      console.log({ error });
    }
  }, [deviceId]);

  const setValueDeviceId = (id: string) => {
    setDeviceId(id);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getAllSchedule();
      setIsLoading(false);
    };
    fetchData();
  }, [getAllSchedule]);

  const onCreateSchedule = async (
    data: Pick<
      Schedule,
      "type" | "condition" | "value" | "period" | "activeRelay" | "deviceId"
    >
  ) => {
    try {
      await createSchedule(data);
      await getAllSchedule();
    } catch (error) {
      console.log({ error });
    }
  };

  const onEditSchedule = async (
    data: Partial<
      Pick<
        Schedule,
        | "id"
        | "type"
        | "condition"
        | "value"
        | "period"
        | "activeRelay"
        | "deviceId"
      >
    >
  ) => {
    setIsLoading(true);
    try {
      if (!data.id) return;
      await updateSchedule(data.id.toString(), data);
      await getAllSchedule();
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteSchedule = async (id: string) => {
    const { isConfirmed } = await swal.fire({
      title: `ยืนยันการลบ`,
      text: `คุณต้องการลบการทำงานอัตโนมัติหรือไม่`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#a33",
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
    });
    if (!isConfirmed) return;
    try {
      const res = await deleteSchedule(id);
      if (res)
        setSchedule((oldVal) =>
          oldVal.filter((schedule) => schedule.id.toString() !== id)
        );
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    schedule,
    setValueDeviceId,
    setIsLoading,
    isLoading,
    onCreateSchedule,
    onDeleteSchedule,
    onEditSchedule,
  };
}

export default useSchedule;
