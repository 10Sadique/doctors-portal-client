import React from 'react';
import AppointmentBanner from '../components/AppointmentBanner';
import AvailableAppointments from '../components/AvailableAppointments';

const AppointmentPage = () => {
    const [selected, setSelected] = React.useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedDate={selected}
                setSelectedDate={setSelected}
            />
            <AvailableAppointments selected={selected} />
        </div>
    );
};

export default AppointmentPage;
