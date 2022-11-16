const getOptions = async () => {
    const res = await fetch('http://localhost:5000/appointmentOptions');
    const data = await res.json();

    return data;
};

export default getOptions;
