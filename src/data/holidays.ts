export interface Holiday {
  date: string;
  name: string;
  type: 'national' | 'local';
}

export const holidays: Holiday[] = [
  // 2026
  { date: '2026-01-01', name: 'Año Nuevo', type: 'national' },
  { date: '2026-01-06', name: 'Reyes Magos', type: 'national' },
  { date: '2026-04-17', name: 'Viernes Santo', type: 'national' },
  { date: '2026-05-01', name: 'Día del Trabajo', type: 'national' },
  { date: '2026-05-29', name: 'San Roque (Patrón de Alcantarilla)', type: 'local' },
  { date: '2026-08-15', name: 'Asunción de María', type: 'national' },
  { date: '2026-10-12', name: 'Día de la Hispanidad', type: 'national' },
  { date: '2026-11-01', name: 'Todos los Santos', type: 'national' },
  { date: '2026-12-06', name: 'Día de la Constitución', type: 'national' },
  { date: '2026-12-25', name: 'Navidad', type: 'national' },

  // 2027
  { date: '2027-01-01', name: 'Año Nuevo', type: 'national' },
  { date: '2027-01-06', name: 'Reyes Magos', type: 'national' },
  { date: '2027-04-09', name: 'Viernes Santo', type: 'national' },
  { date: '2027-05-01', name: 'Día del Trabajo', type: 'national' },
  { date: '2027-05-22', name: 'San Roque (Patrón de Alcantarilla)', type: 'local' },
  { date: '2027-08-15', name: 'Asunción de María', type: 'national' },
  { date: '2027-10-12', name: 'Día de la Hispanidad', type: 'national' },
  { date: '2027-11-01', name: 'Todos los Santos', type: 'national' },
  { date: '2027-12-06', name: 'Día de la Constitución', type: 'national' },
  { date: '2027-12-25', name: 'Navidad', type: 'national' },
];

export const isHoliday = (date: Date): Holiday | undefined => {
  const dateString = date.toISOString().split('T')[0];
  return holidays.find(h => h.date === dateString);
};
