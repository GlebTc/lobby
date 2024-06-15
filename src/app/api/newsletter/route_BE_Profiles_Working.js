// This on works but does not subscriobe to the newsletter
// Receiving ID now in response

import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, lastName, email, phone } = await req.json();
  if (!name || !lastName || !email || !phone) {
    return NextResponse.json({ message: 'Missing required fields' }, 400);
  }

  // Function to format phone number
  function formatPhoneNumber(phone) {
    // Remove all non-numeric characters from the phone number
    const cleaned = phone.replace(/\D/g, '');
    // Check if the phone number starts with a valid country code
    if (cleaned.length >= 10 && cleaned.startsWith('+')) {
      return cleaned;
    } else {
      // Default to a specific country code if not provided
      return `+1${cleaned}`;
    }
  }

  const formattedPhone = formatPhoneNumber(phone);

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      revision: '2024-05-15',
      'content-type': 'application/json',
      Authorization: 'Klaviyo-API-Key pk_ca70fcf150d4056d1e055d87ceabdae44b',
    },
    body: JSON.stringify({
      data: {
        type: 'profile',
        attributes: {
          email: email,
          phone_number: '+15005550006',
          first_name: name,
          last_name: lastName,

          properties: { newKey: 'New Value' },
        },
      },
    }),
  };

  try {
    const response = await fetch(
      'https://a.klaviyo.com/api/profiles/',
      options
    );

    const responseData = await response.json(); // Parse the JSON response
    console.log('Response Data:', responseData); // Log the parsed response data
    console.log('Response User ID:', responseData.data.id); // Log the user ID from the response data

    if (!response.ok) {
      const errorText = await response.text(); // Get the error message from the response
      console.error('Error subscribing to newsletter:', errorText);
      return NextResponse.json(
        { message: 'Error subscribing to newsletter' },
        500
      );
    }

    return NextResponse.json({ message: 'Subscription successful' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error subscribing to newsletter' },
      500
    );
  }
}
