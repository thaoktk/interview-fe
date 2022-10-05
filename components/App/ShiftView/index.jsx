import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { machineDataForShiftA, machineDataForShiftB, shifts } from "../../../data";
import useShiftActiveStore from "../../../store/shiftActiveStore";
import { getAllHourShift } from "../../../utils";
const Bar = dynamic(() => import("../Bar"));

function ShiftView() {
  const [dataShiftActive, setDataShiftActive] = useState(machineDataForShiftA)
  const { shiftActive } = useShiftActiveStore();

  const hoursShift = getAllHourShift(shifts, shiftActive)

  useEffect(() => {
    if (shiftActive === "A") {
      setDataShiftActive(machineDataForShiftA)
    } else {
      setDataShiftActive(machineDataForShiftB)
    }
  }, [shiftActive])

  return (
    <div className="mt-8">
      <div className="p-5 bg-primary w-full">
        <div className="hidden lg:flex items-center">
          <p className="w-[140px] mr-4 text-white text-lg text-center py-3 border-b border-white">Giờ</p>
          <p className="flex-1 text-white text-lg py-3 border-b border-white">Dữ liệu máy chạy trong 1 giờ</p>
        </div>
        <div className="">
          {
            hoursShift.map(hourShift =>
            (
              <div key={hourShift} className="flex flex-col lg:flex-row items-center">
                <p className=" w-full lg:w-[160px] mb-4 lg:mb-0 lg:mr-4 text-white text-lg text-center py-3 border-b border-white">
                  {hourShift}:00
                </p>
                <Bar key={v4()} hour={hourShift} dataShift={dataShiftActive} />
              </div>
            )
            )}
        </div>
      </div>
    </div >
  );
}

export default ShiftView;
