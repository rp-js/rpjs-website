import { useState } from 'react';
import { Image } from '../interfaces';

type UseRandomImage = { image: Image; nextImage: () => void };

export function useRandomImage(images: Image[]): UseRandomImage {
  const [sequence, setSequence] = useState(generateSequence());
  const [image, setImage] = useState(images[sequence[0]]);

  function nextImage() {
    let index;

    if (sequence.length === 1) {
      index = refreshSequence(sequence[0]);
    }

    index = sequence.pop() as number;

    setImage(images[index]);
  }

  function refreshSequence(lastItem: number) {
    let newSequence = generateSequence();

    do {
      newSequence = generateSequence();
    } while (newSequence[0] === lastItem);

    setSequence(newSequence);

    return lastItem;
  }

  function generateSequence(): number[] {
    const uniqueValues: Set<number> = new Set();

    do {
      uniqueValues.add(Number((Math.random() * (images.length - 1)).toFixed()));
    } while (uniqueValues.size < images.length);

    return Array.from(uniqueValues);
  }

  return { image, nextImage };
}
