const shifts = [
    {
        shiftName: "A",
        from: { hour: "08", minute: "00" },
        to: { hour: "19", minute: "59" }
    },
    {
        shiftName: "B",
        from: { hour: "20", minute: "00" },
        to: { hour: "07", minute: "59" }
    }
]

// Machine data for shift A
const machineDataForShiftA = [
    {
        downTimeType: 0,
        state: "Running",
        hour: "08",
        minute: "01",
    },
    {
        downTimeType: 0,
        state: "Running",
        hour: "08",
        minute: "02",
    },
    {
        downTimeType: 0,
        state: "Running",
        hour: "08",
        minute: "03",
    },
    {
        downTimeType: 1,
        state: "Stopped",
        hour: "08",
        minute: "04",
    },
    {
        downTimeType: 1,
        state: "Stopped",
        hour: "08",
        minute: "05",
    },
    {
        downTimeType: 1,
        state: "Stopped",
        hour: "08",
        minute: "06",
    },
    {
        downTimeType: 4,
        state: "Stopped",
        hour: "08",
        minute: "07",
    },
    {
        downTimeType: 4,
        state: "Stopped",
        hour: "08",
        minute: "08",
    },
    {
        downTimeType: 4,
        state: "Stopped",
        hour: "08",
        minute: "09",
    },
    {
        downTimeType: 4,
        state: "Stopped",
        hour: "08",
        minute: "10",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "09",
        minute: "10",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "09",
        minute: "11",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "09",
        minute: "12",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "09",
        minute: "13",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "09",
        minute: "14",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "09",
        minute: "15",
    }

]

// Machine data for shift B
const machineDataForShiftB = [
    {
        downTimeType: 0,
        state: "Running",
        hour: "20",
        minute: "01",
    },
    {
        downTimeType: 0,
        state: "Running",
        hour: "20",
        minute: "02",
    },
    {
        downTimeType: 0,
        state: "Running",
        hour: "20",
        minute: "03",
    },
    {
        downTimeType: 1,
        state: "Stopped",
        hour: "20",
        minute: "04",
    },
    {
        downTimeType: 1,
        state: "Stopped",
        hour: "20",
        minute: "05",
    },
    {
        downTimeType: 1,
        state: "Stopped",
        hour: "20",
        minute: "06",
    },
    {
        downTimeType: 4,
        state: "Stopped",
        hour: "20",
        minute: "07",
    },
    {
        downTimeType: 4,
        state: "Stopped",
        hour: "20",
        minute: "08",
    },
    {
        downTimeType: 4,
        state: "Stopped",
        hour: "20",
        minute: "09",
    },
    {
        downTimeType: 4,
        state: "Stopped",
        hour: "20",
        minute: "10",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "22",
        minute: "10",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "22",
        minute: "11",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "22",
        minute: "12",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "22",
        minute: "13",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "22",
        minute: "14",
    },
    {
        downTimeType: 21,
        state: "Stopped",
        hour: "22",
        minute: "15",
    }
]

export { shifts, machineDataForShiftA, machineDataForShiftB }