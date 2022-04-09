import { useEffect, useState } from 'react'
import { interval } from 'rxjs'

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [displayTime, setDisplayTime] = useState('')

  useEffect(() => {
    const subscription = interval(1000).subscribe(() => {
      setCurrentTime(new Date())
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const month = currentTime.getMonth() + 1
    const day = currentTime.getDate()
    const hour = currentTime.getHours()
    const minute = currentTime.getMinutes()
    setDisplayTime(`${month}月${day}日 ${hour}:${minute}`)
  }, [currentTime])

  return (
    <div className="h-9 w-full bg-black flex justify-center">
      <p className="my-auto text-white text-lg">{displayTime}</p>
    </div>
  )
}
