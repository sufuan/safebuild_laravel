import { Head } from '@inertiajs/react';

/**
 * SEOHead – Reusable per-page SEO component for SafeBuild Canada.
 *
 * Props:
 *   title       – Page title (appended with " | SafeBuild Canada")
 *   description – Meta description (150–160 chars recommended)
 *   canonical   – Full canonical URL (e.g. "https://safebuild.ca/about-us")
 *   ogImage     – Absolute URL to OG image (defaults to site OG image)
 *   schema      – Optional JSON-LD object (plain JS object, will be stringified)
 *   noIndex     – If true, sets noindex,nofollow (for admin/private pages)
 */
export default function SEOHead({
    title,
    description,
    canonical,
    ogImage = 'https://safebuild.ca/assets/og-image.jpg',
    schema = null,
    noIndex = false,
}) {
    const fullTitle = title ? `${title} | SafeBuild Canada` : 'SafeBuild Canada – Expert Construction & Renovation Victoria BC';
    const metaDescription = description || 'SafeBuild Canada – Victoria BC\'s trusted general contractor. Expert renovation, remodeling, architectural design, excavation & custom carpentry. Licensed, insured & BBB accredited.';
    const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://safebuild.ca');

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="SafeBuild Canada" />
            <meta property="og:locale" content="en_CA" />

            {/* Twitter / X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD per-page schema */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Head>
    );
}
