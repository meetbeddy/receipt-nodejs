const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const data = {
        ownerName: 'John Doe',
        address: '123 Main St, Springfield',
        plate_number: 'XYZ123',
        engine_number: 'EN123456789',
        chassis_number: 'CH987654321',
        vehicle_make: 'Toyota',
        hackneyPrice: '₦3000.00',
        date_issued: '2024-01-01',
        qrCodeData: 'This document is valid till Jun 2025 for John Doe with Reg. Number XYZ123.',
        hackney_permit_expires_at: '2025-06-01',
        latest_transaction_ref: 'ABC123456',
        vehicle_model: 'Camry',
        vehicle_color: 'Black',
        engine_capacity: '2.5L'
    };

    res.render('template', {
        ...data,
        formatDate,
        getMonthName,
        getYear
    });
});

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

const getMonthName = (date) => {
    const options = { month: 'short' };
    return new Date(date).toLocaleDateString(undefined, options);
};

const getYear = (date) => {
    const options = { year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
