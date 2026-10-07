/**
 * UTM & Ad Campaign Tracker
 * Stores marketing attribution parameters in sessionStorage upon page landing.
 */

const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
] as const;
const STORAGE_PREFIX = 'bcc_marketing_';

/**
 * Capture UTM parameters from URL query string and store in sessionStorage.
 * Call this on initial page load / app startup.
 */
export function captureUTMParameters(): void {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);

  UTM_PARAMS.forEach((param) => {
    const value = urlParams.get(param);
    if (value) {
      try {
        sessionStorage.setItem(`${STORAGE_PREFIX}${param}`, value);
      } catch (e) {
        console.warn('Could not store UTM parameter', e);
      }
    }
  });
}

/**
 * Retrieve captured UTM parameters to append to lead submission payloads.
 */
export function getStoredUTM(): {
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  gclid: string | null;
  fbclid: string | null;
} {
  if (typeof window === 'undefined') {
    return {
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
      utmTerm: null,
      utmContent: null,
      gclid: null,
      fbclid: null,
    };
  }

  return {
    utmSource: sessionStorage.getItem(`${STORAGE_PREFIX}utm_source`),
    utmMedium: sessionStorage.getItem(`${STORAGE_PREFIX}utm_medium`),
    utmCampaign: sessionStorage.getItem(`${STORAGE_PREFIX}utm_campaign`),
    utmTerm: sessionStorage.getItem(`${STORAGE_PREFIX}utm_term`),
    utmContent: sessionStorage.getItem(`${STORAGE_PREFIX}utm_content`),
    gclid: sessionStorage.getItem(`${STORAGE_PREFIX}gclid`),
    fbclid: sessionStorage.getItem(`${STORAGE_PREFIX}fbclid`),
  };
}
