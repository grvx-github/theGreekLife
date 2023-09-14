

export default async function getServerSideProps(context) {
    const id = context.query.id;
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect('mongodb://127.0.0.1:27017/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'greekLifeDB'
        });
    }
    const holidayData = await Holiday.findOne({ _id: id });

    if (!holidayData) {
        console.error(`Holiday data not found for ID: ${id}`);
        return {
            props: {
                error: 'Holiday data not found',
            },
        }
    }

    // Return the serialized data as props
    const serializedData = JSON.parse(JSON.stringify(holidayData));

    return {
        props: { serializedData }, // will be passed to the page component as props
    }
}