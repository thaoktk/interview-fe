import React from 'react'
import { v4 } from 'uuid'
import { convertTime } from '../../../utils'

const allMinutes = []

for (let i = 1; i < 60; i++) {
    allMinutes.push(i)
}

function Bar({ hour, dataShift }) {
    const renderShiftView = () => {
        const hourShift = dataShift.filter(item => parseInt(item.hour) === hour)
        return allMinutes.map(minute => {
            const minuteShift = hourShift.find(item => parseInt(item.minute) === minute)
            if (!minuteShift) {
                return (<div
                    key={v4()}
                    className='w-[20px] lg:w-full h-[50px] border bg-gray tooltip'>
                    <span className="tooltip-text">{convertTime(hour, minute)} - Máy không hoạt động</span>
                </div>)
            } else {
                if (minuteShift.downTimeType === 0) {
                    return (<div
                        key={v4()}
                        className='w-[20px] lg:w-full h-[50px] border bg-green tooltip'>
                        <span className="tooltip-text">{convertTime(hour, minute)} - Máy chạy bình thường</span>
                    </div>)
                } else if (minuteShift.downTimeType >= 1 && minuteShift.downTimeType <= 19) {
                    return (<div
                        key={v4()}
                        className='w-[20px] lg:w-full h-[50px] border bg-red tooltip'>
                        <span className="tooltip-text">{convertTime(hour, minute)} - Máy dừng không kế hoạch</span>
                    </div>)
                } else if (minuteShift.downTimeType >= 20) {
                    return (<div
                        key={v4()}
                        className='w-[20px] lg:w-full h-[50px] border bg-yellow tooltip'>
                        <span className="tooltip-text">{convertTime(hour, minute)} - Máy dừng có kế hoạch</span>
                    </div>)
                }
            }
        })
    }
    return (
        <div className='w-full flex flex-wrap lg:flex-nowrap items-center'>
            {renderShiftView()}
        </div>
    )
}

export default Bar