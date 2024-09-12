import { Metadata } from 'next';
import * as React from 'react';

import OneImageCropper from '@/organisms/OneImageCropper/OneImageCropper';

export const metadata: Metadata = {
  title: 'One image | Image cropper',
};

export default function Page() {
  return (
    <>
      <h1 className="text-center m-5">Create your waifu image</h1>
      <OneImageCropper />
    </>
  );
}
