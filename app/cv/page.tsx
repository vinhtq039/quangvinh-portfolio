import type { Metadata } from 'next';
import { CvViewer } from '@/components/CvViewer';

export const metadata: Metadata = {
  title: 'Trần Quang Vĩnh — Sơ yếu lý lịch / CV',
  description:
    'Sơ yếu lý lịch và CV chi tiết của Trần Quang Vĩnh — Kỹ sư Full-Stack chuyên ReactJS, Next.js, NestJS, Zalo Mini App và tích hợp AI.',
};

export default function CvPage() {
  return <CvViewer />;
}
