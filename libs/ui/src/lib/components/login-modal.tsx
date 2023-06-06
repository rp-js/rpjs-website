'use client';

import Image from 'next/image';
import { Modal } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import { GithubButton } from './button/github';
import { GoogleButton } from './button/google';

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface ImageProps {
  source: string;
  altText: string;
}

export default function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  function generateRandomImage() {
    const images = [
      {
        source: '/login.svg',
        altText: 'Garota acessando sua conta em um celular.',
      },
      {
        source: '/login2.svg',
        altText: 'Mulher acessando sua conta em um celular.',
      },
      {
        source: '/login3.svg',
        altText: 'Garoto colocando uma chave dentro de um cadeado, simbolizando a senha.',
      },
      {
        source: '/login4.svg',
        altText: 'Garota acessando sua conta em um celular.',
      },
      {
        source: '/login5.svg',
        altText: 'Garoto e garota acessando suas contas em um celular.',
      },
    ];

    const previousImages: ImageProps[] = [];

    const availableImages = images.filter((image) => !previousImages.includes(image));

    if (availableImages.length === 0) {
      return images[Math.floor(Math.random() * 5)];
    }

    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const randomImage = availableImages[randomIndex];

    previousImages.push(randomImage);

    return randomImage;
  }

  const randomImage = generateRandomImage();
  console.log('iiiii');

  return (
    <Modal centered okType="default" open={isOpen} onOk={closeModal} onCancel={closeModal} footer={null}>
      <div className=" py-5">
        <h1 className="font-bold  text-3xl mb-8 text-center">Entre no RP.Js!</h1>
        <Image
          className="flex-shrink-0 mx-auto mb-4"
          src={randomImage.source}
          alt={randomImage.altText}
          width={300}
          height={300}
        />
        <div className="flex justify-center items-center w-full flex-col gap-3 mt-8">
          <GoogleButton />
          <GithubButton />
        </div>
      </div>
    </Modal>
  );
}
