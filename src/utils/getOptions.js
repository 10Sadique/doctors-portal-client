const getOptions = async (date) => {
    const res = await fetch(
        `https://doctors-portal-server-ten.vercel.app/v2/appointmentOptions?date=${date}`
    );
    const data = await res.json();

    return data;
};

export default getOptions;
