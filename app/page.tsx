import * as React from 'react';

import OneImageCropper from '@/organisms/OneImageCropper/OneImageCropper';

export default function Page() {
  return (
    <>
      <h1 className="text-center m-5">Create your waifu image</h1>
      <OneImageCropper />
    </>
  );
}
