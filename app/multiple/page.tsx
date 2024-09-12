import { Metadata } from 'next';
import * as React from 'react';

import MultipleImagesCropper from '@/organisms/MultipleImagesCropper/MultipleImagesCropper';

export const metadata: Metadata = {
  title: 'Multiple images | Image cropper',
};

export default function Page() {
  return (
    <>
      <h1 className="text-center m-5">Create multiple waifu images at once</h1>
      <MultipleImagesCropper />
    </>
  );
}
