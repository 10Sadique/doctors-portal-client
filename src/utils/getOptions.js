const getOptions = async (date) => {
    const res = await fetch(
        `http://localhost:5000/v2/appointmentOptions?date=${date}`
    );
    const data = await res.json();

    return data;
};

export default getOptions;
