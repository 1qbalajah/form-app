import { useState } from 'react';

export default function useFormStatus() {
  const [status, setStatus] = useState('idle'); // idle, loading, success
  return { status, setStatus };
}
