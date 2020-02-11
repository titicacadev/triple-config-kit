// Optional chaining reached TC39 Stage 3 consensus during
// 3.7's development. Optional Chaining allows you to write
// code which can immediately stop running expressions when
// it hits a null or undefined.

// Property Access

// Let's imagine we have an album where the artist, and the
// artists bio might not be present in the data. For example
// a compilation may not have a single artist.

type AlbumAPIResponse = {
  title: string
  artist?: {
    name: string
    bio?: string
    previousAlbums?: string[]
  }
}

declare const album: AlbumAPIResponse

// With optional chaining, you can write
// code like this:

export const artistBio = album?.artist?.bio

// Instead of:

export const maybeArtistBio = album.artist && album.artist.bio

// In this case ?. acts differently than the &&s since &&
// will act differently on "falsy" values (e.g. an empty string,
// 0, NaN, and, well, false).

// Optional chaining will only take null or undefined as
// a signal to stop and return an undefined.

// Optional Element Access

// Property access is via the . operator, the optional chaining
// also works with the [] operators when accessing elements.

export const maybeArtistBioElement = album?.['artist']?.['bio']

export const maybeFirstPreviousAlbum = album?.artist?.previousAlbums?.[0]

// Optional Calls

// When dealing with functions which may or may not exist at
// runtime, optional chaining supports only calling a function
// if it exists. This can replace code where you would traditionally
// write something like: if (func) func()

// For example here's an optional call to the callback from
// an API request:

const callUpdateMetadata = (metadata: any) => Promise.resolve(metadata) // Fake API call

export const updateAlbumMetadata = async (
  metadata: any,
  callback?: () => void,
) => {
  await callUpdateMetadata(metadata)

  callback?.()
}

export async function makeRequest(url: string, log?: (msg: string) => void) {
  log?.(`Request started at ${new Date().toISOString()}`)
  // roughly equivalent to
  //   if (log != null) {
  //       log(`Request started at ${new Date().toISOString()}`);
  //   }

  const result = (await fetch(url)).json()

  log?.(`Request finished at at ${new Date().toISOString()}`)

  return result
}

// You can read more about optional chaining in the 3.7 blog post:
//
// https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/
