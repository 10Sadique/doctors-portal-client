import React from 'react';
import AppointmentBanner from '../components/AppointmentBanner';
import { format } from 'date-fns';

const AppointmentPage = () => {
    const [selected, setSelected] = React.useState(new Date());

    let footer = <p>Please Pick Appointment Date.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected} />
            <div>{footer}</div>
        </div>
    );
};

export default AppointmentPage;
