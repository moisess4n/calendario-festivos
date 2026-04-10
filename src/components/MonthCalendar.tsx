import React from 'react';
import { isHoliday } from '../data/holidays';

interface MonthCalendarProps {
  year: number;
  month: number;
}

export const MonthCalendar: React.FC<MonthCalendarProps> = ({ year, month }) => {
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);

  // Get the day of week for the first day (0=Sunday, so we need to adjust for Monday start)
  let startingDayOfWeek = firstDay.getDay() - 1;
  if (startingDayOfWeek < 0) startingDayOfWeek = 6;

  const daysInMonth = lastDay.getDate();
  const daysInPrevMonth = prevLastDay.getDate();

  const days = [];

  // Previous month days
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: daysInPrevMonth - i,
      currentMonth: false,
      isToday: false,
      isHoliday: false
    });
  }

  // Current month days
  const today = new Date();
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(year, month, i);
    const holiday = isHoliday(currentDate);
    const isToday = currentDate.toDateString() === today.toDateString();
    
    days.push({
      date: i,
      currentMonth: true,
      isToday,
      isHoliday: !!holiday,
      holidayData: holiday
    });
  }

  // Next month days
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: i,
      currentMonth: false,
      isToday: false,
      isHoliday: false
    });
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        {monthNames[month]} {year}
      </h2>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center font-semibold text-gray-600 text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => {
          let bgColor = 'bg-gray-50 text-gray-400';
          let borderClass = '';

          if (day.currentMonth) {
            bgColor = 'bg-white text-gray-800';

            if (day.isHoliday) {
              bgColor = 'bg-red-100 text-red-800';
              borderClass = 'border-2 border-red-500';
            } else if (day.isToday) {
              bgColor = 'bg-blue-500 text-white';
              borderClass = 'border-2 border-blue-600';
            }

            // Weekend
            if ((index + 1) % 7 === 6 || (index + 1) % 7 === 0) {
              if (!day.isHoliday && !day.isToday) {
                bgColor = 'bg-gray-100 text-gray-800';
              }
            }
          }

          return (
            <div
              key={index}
              className={`
                aspect-square flex items-center justify-center rounded
                font-semibold ${bgColor} ${borderClass}
                transition-all hover:shadow-md
              `}
              title={day.holidayData?.name || ''}
            >
              {day.date}
            </div>
          );
        })}
      </div>
    </div>
  );
};
