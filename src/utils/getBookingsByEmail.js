const getBookingsByEmail = async (email) => {
    const res = await fetch(
        `https://doctors-portal-server-ten.vercel.app/bookings?email=${email}`,
        {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
        }
    );
    const data = await res.json();

    return data;
};

export default getBookingsByEmail;
