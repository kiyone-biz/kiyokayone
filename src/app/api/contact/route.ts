import type { ContactFormData, ContactResponse } from '@/types/contact';
import { NextResponse } from 'next/server';

// POSTメソッドを受け付けるエンドポイント
export async function POST(request: Request): Promise<Response> {
  try {
    const data: ContactFormData = await request.json(); // フォームの内容を取得

    console.log('お問い合わせ内容:', data);

    // ここで例えばメール送信やDB保存などを行う

    const res: ContactResponse = {
      success: true,
      message: 'お問い合わせを受け付けました。',
    };

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.error('エラー:', error);

    const res: ContactResponse = {
      success: false,
      message: 'エラーが発生しました。もう一度お試しください。',
    };

    return NextResponse.json(res, { status: 500 });
  }
}
