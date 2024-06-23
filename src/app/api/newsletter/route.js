import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, lastName, email, phone } = await req.json();

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

  const attributes = {
    email: email,
    first_name: name,
    last_name: lastName,
    properties: { newKey: 'New Value' },
  };

  if (phone) {
    attributes.phone_number = formatPhoneNumber(phone);
  }

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      revision: '2024-05-15',
      'content-type': 'application/json',
      Authorization: `Klaviyo-API-Key ${process.env.NEXT_PUBLIC_KLAVIYO_PRIVATE_API_KEY}`,
    },
    body: JSON.stringify({
      data: {
        type: 'profile',
        attributes: attributes,
      },
    }),
  };

  try {
    const response = await fetch(
      'https://a.klaviyo.com/api/profiles/',
      options
    );
    const responseData = await response.json();
    // console.log(responseData);

    if (!response.ok) {
      return NextResponse.json({
        error: 'Error subscribing to newsletter',
        data: responseData,
      });
    }

    return NextResponse.json({
      message: 'Subscription successful',
      profile: responseData,
    });
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
