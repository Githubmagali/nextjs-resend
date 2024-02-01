import { EmailTemplate } from "@/app/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend =new Resend('re_VCdGtck6_3Z6J4bbs4vRpX9b5ZvMqBePs');

export async function POST(){
    try {

  const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['magalivictoria85068@gmail.com'],
        subject: "mensaje",
        react: EmailTemplate({firstName: "nombre"}),
        text: "texto",
    });
    console.log(data);

    return NextResponse.json({message: "email sent"}, {
        status: 200
    })
} catch(error){
    return NextResponse.json({message: "Error"},{
        status : 500
    })
}
}