export default function convertUrl(url: string) {
  return url
    .replaceAll('/', '@')
    .replace('https:@@', 'https://dotfeet-image-48ee370c0193.herokuapp.com/image/');
}
