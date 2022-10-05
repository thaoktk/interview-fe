import React from "react";
import { v4 } from "uuid";
import { shifts } from "../../../data";
import useShiftActiveStore from "../../../store/shiftActiveStore";

function Form() {
  const { shiftActive, setShiftActive } = useShiftActiveStore()
  return (
    <div>
      <p className="mb-4 text-white text-lg">Chọn ca</p>
      <select
        value={shiftActive}
        onChange={e => setShiftActive(e.target.value)}
        className="px-5 py-2 outline-none rounded-md">
        {shifts.map((shift) => (
          <option key={v4()} value={shift.shiftName}>
            Ca {shift.shiftName} ({shift.from.hour}:{shift.from.minute} -{" "}
            {shift.to.hour}:{shift.to.minute})
          </option>
        ))}
      </select>
    </div>
  );
}

export default Form;
