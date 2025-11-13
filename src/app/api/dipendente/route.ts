import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'nome', 'cognome', 'mail', 'telefono', 
      'meseNascita', 'annoNascita',
      'amount', 'salary', 'tipo', 'contratto'
    ];
    
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Here you can add your logic to save the data
    // For example: save to database, send to external API, etc.
    console.log('DIPENDENTE Form Submission:', JSON.stringify(body, null, 2));

    // TODO: Add your integration logic here
    // Examples:
    // - Save to database
    // - Send to CRM
    // - Send email notification
    // - Call external API

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        data: body 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing DIPENDENTE form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

