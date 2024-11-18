import { render } from "@react-email/render";

import WelcomeTemplate from "../../../emails";

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  // 2 requests per minute from the same IP address in a sliding window of 1 minute duration which means that the window slides forward every second and the rate limit is reset every minute for each IP address.
  limiter: Ratelimit.slidingWindow(20, "1 m"),
});

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const ip = request.ip ?? "127.0.0.1";
    const result = await ratelimit.limit(ip);

    if (!result.success) {
      return Response.json(
        { error: "Too many requests!!" },
        { status: 429 }
      );
    }

    const { email, name } = await request.json();
    console.log('Attempting to send email to:', email, 'with name:', name);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Thankyou for wailisting the Next.js + Notion CMS template!",
      reply_to: "lakshb.work@gmail.com",
      html: render(WelcomeTemplate({ userFirstname: name })),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(error);
    }

    if (!data) {
      console.error('No data returned from Resend');
      return NextResponse.json({ message: "Failed to send email" });
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
