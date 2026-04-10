import { useState } from 'react';
import { MonthCalendar } from './components/MonthCalendar';
import { holidays } from './data/holidays';

function App() {
  const [selectedYear, setSelectedYear] = useState(2026);

  const groupedHolidays = holidays
    .filter(h => new Date(h.date).getFullYear() === selectedYear)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const nationalHolidays = groupedHolidays.filter(h => h.type === 'national');
  const localHolidays = groupedHolidays.filter(h => h.type === 'local');

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">
            📅 Calendario Laboral
          </h1>
          <p className="text-xl text-white/90">
            Alcantarilla, Murcia
          </p>
        </div>

        {/* Year selector */}
        <div className="flex justify-center gap-4 mb-12">
          {[2026, 2027].map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`
                px-6 py-3 rounded-lg font-bold text-lg transition-all
                ${selectedYear === year
                  ? 'bg-white text-purple-600 shadow-lg scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
                }
              `}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Array.from({ length: 12 }, (_, i) => (
            <MonthCalendar
              key={i}
              year={selectedYear}
              month={i}
            />
          ))}
        </div>

        {/* Holidays List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* National Holidays */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-4 h-4 bg-red-500 rounded mr-2"></span>
              Festivos Nacionales
            </h2>
            <ul className="space-y-3">
              {nationalHolidays.map(holiday => {
                const date = new Date(holiday.date);
                const formatted = date.toLocaleDateString('es-ES', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                });
                return (
                  <li
                    key={holiday.date}
                    className="flex items-start p-3 bg-red-50 rounded border-l-4 border-red-500"
                  >
                    <span className="font-semibold text-red-700 min-w-fit mr-3">
                      {formatted}
                    </span>
                    <span className="text-gray-700">{holiday.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Local Holidays */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-4 h-4 bg-orange-500 rounded mr-2"></span>
              Festivos Locales
            </h2>
            <ul className="space-y-3">
              {localHolidays.length > 0 ? (
                localHolidays.map(holiday => {
                  const date = new Date(holiday.date);
                  const formatted = date.toLocaleDateString('es-ES', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  });
                  return (
                    <li
                      key={holiday.date}
                      className="flex items-start p-3 bg-orange-50 rounded border-l-4 border-orange-500"
                    >
                      <span className="font-semibold text-orange-700 min-w-fit mr-3">
                        {formatted}
                      </span>
                      <span className="text-gray-700">{holiday.name}</span>
                    </li>
                  );
                })
              ) : (
                <p className="text-gray-500 italic">No hay festivos locales</p>
              )}
            </ul>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Leyenda</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 border-2 border-red-500 rounded mr-3"></div>
              <span className="text-gray-700">Día festivo</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-100 rounded mr-3"></div>
              <span className="text-gray-700">Fin de semana</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 text-white rounded mr-3 flex items-center justify-center">
                <span className="text-xs">Hoy</span>
              </div>
              <span className="text-gray-700">Día actual</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-white/80">
          <p className="text-sm">
            Calendario laboral oficial de Alcantarilla, Murcia para 2026 y 2027
          </p>
          <p className="text-xs mt-2">
            © 2026 - Información actualizada a abril de 2026
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
