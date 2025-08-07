'use client';

import { ContactFormData } from '@/types/contact';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='name' className='block mb-1 font-medium'>
          名前
        </label>
        <input
          id='name'
          name='name'
          type='text'
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md dark:bg-gray-800'
        />
      </div>
      <div>
        <label htmlFor='email' className='block mb-1 font-medium'>
          メール
        </label>
        <input
          id='email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md dark:bg-gray-800'
        />
      </div>
      <div>
        <label htmlFor='message' className='block mb-1 font-medium'>
          本文
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className='w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md dark:bg-gray-800'
        ></textarea>
      </div>
      <button
        type='submit'
        className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50'
        disabled={status === 'loading'}
      >
        {status === 'loading' ? '送信中...' : '送信'}
      </button>
      {status === 'success' && (
        <p className='text-green-600 mt-2'>メッセージありがとうございます！</p>
      )}
      {status === 'error' && (
        <p className='text-red-600 mt-2'>
          問題が発生しました。もう一度お試しください。
        </p>
      )}
    </form>
  );
}
