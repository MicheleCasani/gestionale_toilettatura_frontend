import React, { useState } from 'react'

const CalendarModal = ({ show, onClose }) => {
    const [currentWeek, setCurrentWeek] = useState(0) // 0 = settimana corrente

    if (!show) return null

    // Mock data per gli appuntamenti
    const appointments = {
        'mercoledi': [
            { time: '09:00', client: 'Mario - Max', service: 'Bagno completo', duration: '1h', status: 'confermato' },
            { time: '11:30', client: 'Laura - Luna', service: 'Tosatura', duration: '1.5h', status: 'confermato' },
            { time: '14:00', client: 'Paolo - Rex', service: 'Servizio completo', duration: '2h', status: 'confermato' }
        ],
        'giovedi': [
            { time: '10:00', client: 'Anna - Bella', service: 'Taglio pelo', duration: '1h', status: 'confermato' },
            { time: '15:30', client: 'Luca - Charlie', service: 'Spazzolatura', duration: '30min', status: 'confermato' }
        ],
        'venerdi': [
            { time: '09:30', client: 'Sara - Molly', service: 'Bagno completo', duration: '1h', status: 'confermato' },
            { time: '13:00', client: 'Franco - Bobby', service: 'Servizio completo', duration: '2h', status: 'confermato' },
            { time: '16:00', client: 'Elena - Daisy', service: 'Taglio pelo', duration: '1h', status: 'confermato' }
        ],
        'sabato': [
            { time: '09:00', client: 'Roberto - Zeus', service: 'Tosatura', duration: '1.5h', status: 'confermato' },
            { time: '11:00', client: 'Giulia - Mia', service: 'Bagno completo', duration: '1h', status: 'confermato' },
            { time: '14:30', client: 'Andrea - Leo', service: 'Servizio completo', duration: '2h', status: 'confermato' }
        ]
    }

    const timeSlots = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
        '18:00', '18:30', '19:00', '19:30'
    ]

    const workDays = ['Mercoledi', 'Giovedi', 'Venerdi', 'Sabato']

    const getWeekDates = (weekOffset) => {
        const today = new Date(2025, 10, 21) // 21 Nov 2025 (giovedì)
        const currentWeekStart = new Date(today)
        currentWeekStart.setDate(today.getDate() - today.getDay() + 3) // Mercoledì

        const weekStart = new Date(currentWeekStart)
        weekStart.setDate(currentWeekStart.getDate() + (weekOffset * 7))

        return {
            week: `${weekStart.getDate()} - ${weekStart.getDate() + 3}`,
            month: weekStart.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })
        }
    }

    const getServiceBadgeColor = (service) => {
        switch (service) {
            case 'Bagno completo': return 'bg-primary'
            case 'Taglio pelo': return 'bg-success'
            case 'Tosatura': return 'bg-warning'
            case 'Servizio completo': return 'bg-danger'
            case 'Spazzolatura': return 'bg-info'
            default: return 'bg-secondary'
        }
    }

    const hasAppointment = (day, time) => {
        const dayAppointments = appointments[day.toLowerCase()] || []
        return dayAppointments.find(apt => apt.time === time)
    }

    const weekInfo = getWeekDates(currentWeek)

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-calendar me-2"></i>
                            <div>
                                <h5 className="modal-title mb-0">Calendario Appuntamenti</h5>
                                <small className="text-muted">{weekInfo.month}</small>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body p-0">
                        {/* Navigazione settimana */}
                        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => setCurrentWeek(currentWeek - 1)}
                                disabled={currentWeek <= -4} // Limite: 1 mese indietro
                            >
                                <i className="fa-solid fa-chevron-left me-1"></i>
                                Settimana Precedente
                            </button>

                            <div className="text-center">
                                <h6 className="mb-0">Settimana {weekInfo.week}</h6>
                            </div>

                            <button
                                className="btn btn-outline-primary"
                                onClick={() => setCurrentWeek(currentWeek + 1)}
                                disabled={currentWeek >= 12} // Limite: 3 mesi avanti
                            >
                                Settimana Successiva
                                <i className="fa-solid fa-chevron-right ms-1"></i>
                            </button>
                        </div>

                        {/* Vista calendario settimanale */}
                        <div className="table-responsive">
                            <table className="table table-bordered mb-0" style={{ minHeight: '400px' }}>
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ width: '80px' }} className="text-center">Orario</th>
                                        {workDays.map(day => (
                                            <th key={day} className="text-center" style={{ width: '200px' }}>
                                                {day}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {timeSlots.map(time => (
                                        <tr key={time} style={{ height: '45px' }}>
                                            <td className="text-center fw-bold bg-light">{time}</td>
                                            {workDays.map(day => {
                                                const appointment = hasAppointment(day, time)
                                                return (
                                                    <td key={`${day}-${time}`} className="p-1">
                                                        {appointment ? (
                                                            <div className={`badge ${getServiceBadgeColor(appointment.service)} w-100 text-wrap p-2`}
                                                                style={{ fontSize: '0.7rem', lineHeight: '1.2' }}>
                                                                <div className="fw-bold">{appointment.client}</div>
                                                                <div>{appointment.service}</div>
                                                                <div>({appointment.duration})</div>
                                                            </div>
                                                        ) : (
                                                            <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted"
                                                                style={{ minHeight: '35px', cursor: 'pointer', borderRadius: '4px' }}
                                                                onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                                                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                                                                <small>Libero</small>
                                                            </div>
                                                        )}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Legenda */}
                        <div className="p-3 border-top bg-light">
                            <h6 className="mb-2">Legenda Servizi:</h6>
                            <div className="d-flex flex-wrap gap-3">
                                <span><span className="badge bg-primary me-1">■</span> Bagno completo</span>
                                <span><span className="badge bg-success me-1">■</span> Taglio pelo</span>
                                <span><span className="badge bg-warning me-1">■</span> Tosatura</span>
                                <span><span className="badge bg-danger me-1">■</span> Servizio completo</span>
                                <span><span className="badge bg-info me-1">■</span> Spazzolatura</span>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="me-auto">
                            <small className="text-muted">
                                <i className="fa-solid fa-info-circle me-1"></i>
                                Click su uno slot per gestire l'appuntamento
                            </small>
                        </div>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarModal
