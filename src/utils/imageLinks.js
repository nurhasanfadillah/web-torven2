const GOOGLE_DRIVE_HOST = 'drive.google.com'
const GOOGLE_PHOTO_HOST = 'lh3.googleusercontent.com'

function extractGoogleDriveId(url) {
  const patterns = [
    /\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match?.[1]) return match[1]
  }

  return null
}

export function asImageSrc(url) {
  if (!url) return url

  if (url.includes(GOOGLE_PHOTO_HOST)) {
    return url
  }

  const isGoogleDrive = url.includes(GOOGLE_DRIVE_HOST)
  if (!isGoogleDrive) return url

  const fileId = extractGoogleDriveId(url)
  if (!fileId) return url

  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`
}
