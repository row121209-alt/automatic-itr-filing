import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

interface TimeZoneItem {
  name: string
  timezone: string
  offset: string
}

const TIME_ZONES: TimeZoneItem[] = [
  { name: 'New York', timezone: 'America/New_York', offset: 'UTC-5' },
  { name: 'London', timezone: 'Europe/London', offset: 'UTC+0' },
  { name: 'India (IST)', timezone: 'Asia/Kolkata', offset: 'UTC+5:30' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo', offset: 'UTC+9' },
  { name: 'Sydney', timezone: 'Australia/Sydney', offset: 'UTC+10' },
  { name: 'Dubai', timezone: 'Asia/Dubai', offset: 'UTC+4' },
  { name: 'Singapore', timezone: 'Asia/Singapore', offset: 'UTC+8' },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles', offset: 'UTC-8' },
]

interface DisplayTime {
  timezone: string
  time: string
  date: string
  name: string
}

export default function TimeZoneClock() {
  const [times, setTimes] = useState<DisplayTime[]>([])
  const [is24Hour, setIs24Hour] = useState(true)

  useEffect(() => {
    const updateTimes = () => {
      const updatedTimes = TIME_ZONES.map((tz) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: !is24Hour,
        })

        const dateFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.timezone,
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })

        return {
          timezone: tz.timezone,
          time: formatter.format(new Date()),
          date: dateFormatter.format(new Date()),
          name: tz.name,
        }
      })

      setTimes(updatedTimes)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)

    return () => clearInterval(interval)
  }, [is24Hour])

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">World Clock</h1>
          </div>
          <button
            onClick={() => setIs24Hour(!is24Hour)}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            {is24Hour ? '12-Hour' : '24-Hour'}
          </button>
        </div>
        <p className="text-gray-600">Current time across different time zones</p>
      </div>

      {/* Clock Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {times.map((item) => (
          <div
            key={item.timezone}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 border border-blue-200 hover:shadow-xl transition-shadow"
          >
            {/* Location Name */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h2>

            {/* Digital Clock */}
            <div className="bg-gray-900 rounded-lg p-6 mb-4 font-mono">
              <div className="text-5xl font-bold text-green-400 text-center tracking-wider">
                {item.time}
              </div>
              <div className="text-center text-green-300 text-sm mt-2 font-semibold">
                {item.date}
              </div>
            </div>

            {/* Time Zone Info */}
            <div className="text-sm text-gray-700 bg-white rounded p-2 text-center font-medium">
              {item.timezone}
            </div>
          </div>
        ))}
      </div>

      {/* Local Time Card */}
      <LocalTimeCard is24Hour={is24Hour} />
    </div>
  )
}

function LocalTimeCard({ is24Hour }: { is24Hour: boolean }) {
  const [localTime, setLocalTime] = useState<string>('')
  const [localDate, setLocalDate] = useState<string>('')

  useEffect(() => {
    const updateLocalTime = () => {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !is24Hour,
      })

      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      setLocalTime(formatter.format(now))
      setLocalDate(dateFormatter.format(now))
    }

    updateLocalTime()
    const interval = setInterval(updateLocalTime, 1000)
    return () => clearInterval(interval)
  }, [is24Hour])

  return (
    <div className="mt-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-4">Your Local Time</h3>
      <div className="bg-black bg-opacity-30 rounded-lg p-8">
        <div className="text-6xl font-bold font-mono mb-4 text-center text-yellow-300">
          {localTime}
        </div>
        <div className="text-center text-lg text-gray-100">{localDate}</div>
      </div>
    </div>
  )
}
