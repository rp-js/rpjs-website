/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Dispatch, SetStateAction, useEffect } from 'react';
import Image from 'next/image';
import { Modal } from 'antd';
import { GithubButton, GoogleButton } from '../button';
import { useRandomImage } from '../../hooks/random-image';

interface LoginModalProps {
  isOpen: boolean;
  modalType: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onLoginClick?: (type: 'github' | 'google') => void;
}

const images = [
  {
    source: '/login-svgs/girl-login.svg',
    altText: 'Garota acessando sua conta em um celular.',
  },
  {
    source: '/login-svgs/woman-login.svg',
    altText: 'Mulher acessando sua conta em um celular.',
  },
  {
    source: '/login-svgs/boy-login.svg',
    altText: 'Garoto colocando uma chave dentro de um cadeado, simbolizando a senha.',
  },
  {
    source: '/login-svgs/secondary-girl-login.svg',
    altText: 'Garota acessando sua conta em um celular.',
  },
  {
    source: '/login-svgs/group-login.svg',
    altText: 'Garoto e garota acessando suas contas em um celular.',
  },
];

export function LoginModal({ isOpen, setIsOpen, modalType, onLoginClick }: LoginModalProps) {
  const { image, nextImage } = useRandomImage(images);

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    if (isOpen) {
      nextImage();
    }
  }, [isOpen]);

  return (
    <Modal centered okType="default" open={isOpen} onOk={closeModal} onCancel={closeModal} footer={null}>
      <div className=" py-5">
        <h1 className="font-bold  text-3xl mb-8 text-center">{modalType} no RP.Js!</h1>
        <Image className="flex-shrink-0 mx-auto mb-4" src={image.source} alt={image.altText} width={300} height={300} />
        <div className="flex justify-center items-center w-full flex-col gap-3 mt-8">
          <GoogleButton type={modalType} onClick={onLoginClick} />
          <GithubButton type={modalType} onClick={onLoginClick} />
        </div>
      </div>
    </Modal>
  );
}
