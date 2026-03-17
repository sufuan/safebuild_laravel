import React from 'react';
import { getAssetUrl } from '@/lib/utils';

export default function BrandLogos({ brandLogos = [] }) {
    return (
        <section className="bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-full">
                <div className="flex items-center flex-wrap justify-center py-4">
                    {brandLogos && brandLogos.map((logo) => (
                        <div key={logo.id} className="flex-1 min-w-[160px] max-w-[200px] h-32 flex items-center justify-center border-r border-gray-100 last:border-r-0 relative group hover:bg-sb-orange transition-colors duration-300">
                            <img src={getAssetUrl(logo.image_path)} alt="Brand Logo" className="h-16 opacity-90 grayscale group-hover:grayscale-0 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
