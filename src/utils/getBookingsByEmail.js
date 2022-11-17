const getBookingsByEmail = async (email) => {
    const res = await fetch(`http://localhost:5000/bookings?email=${email}`);
    const data = await res.json();

    return data;
};

export default getBookingsByEmail;
