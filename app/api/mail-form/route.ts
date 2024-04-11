import { NextResponse, NextRequest } from 'next/server';
import type { FormValues } from '@/components/mail-form';

export async function POST(request: NextRequest):Promise<NextResponse> {
  const formData = await request.json();
  console.log(`formData: ${JSON.stringify(formData)}`);

  // const headers = new Headers([
  //   ["Content-Type", "application/json"],
  //   ["Authorization", "Bearer " + process.env.SENDGRID_API_KEY],
  // ]);

  // const requestBody = {
  //   personalizations: [
  //     {
  //       to: [
  //         {
  //           email: formData.get("email"),
  //         },
  //       ],
  //     },
  //   ],
  //   subject: "お問い合わせを受け付けました。",
  //   from: {
  //     email: "
  return new NextResponse(JSON.stringify({ success: true, message: "お問い合わせを受け付けました。" }));
}