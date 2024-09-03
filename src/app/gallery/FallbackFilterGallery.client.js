'use client'

import Loader from "../components/Loader/Loader";
import { Suspense } from 'react';
import FilterGallery from './FilterGallery.client';

// currently using local sample data
import sampleGalleryData from './sampleGalleryData';

export default function FallbackFilterGallery() {
    return (
        <Suspense fallback={<Loader />}>
          <FilterGallery sampleGalleryData={sampleGalleryData} />
      </Suspense>
    );
}