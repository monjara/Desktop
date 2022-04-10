import React, { useEffect, useState } from 'react'
import { interval } from 'rxjs'

const Clock = () => {
  const [displayTime, setDisplayTime] = useState('')
  const [currentTime, setCurrentTime] = useState(new Date())
  const [tmpMinute, setTmpMinute] = useState(0)

  useEffect(() => {
    const subscription = interval(1000).subscribe(() => {
      setCurrentTime(new Date())
      setTmpMinute(currentTime.getMinutes())
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [currentTime])

  useEffect(() => {
    const month = currentTime.getMonth() + 1
    const day = currentTime.getDate()
    const hour = ('00' + currentTime.getHours().toString()).slice(-2)
    const minute = ('00' + currentTime.getMinutes().toString()).slice(-2)
    setDisplayTime(`${month}月${day}日 ${hour}:${minute}`)
  }, [tmpMinute])

  return <p className='my-auto text-white text-lg'>{displayTime}</p>
}

export default React.memo(Clock)
