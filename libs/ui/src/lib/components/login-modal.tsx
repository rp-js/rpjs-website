'use client';

import Image from 'next/image';
import { Modal } from 'antd';
import { AiFillGithub } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';
import { Dispatch, SetStateAction } from 'react';
import { Button } from './button';

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <Modal centered okType="default" open={isOpen} onOk={closeModal} onCancel={closeModal} footer={null}>
      <Image
        className="flex-shrink-0 mx-auto mb-4"
        src="/logo.svg"
        alt="logo amarelo escrito r p j s"
        width={44}
        height={44}
      />
      <h1 className=" text-center font-bold text-xl mb-4">Entre no RP.js!</h1>
      <p className="text-center   text-gray-500  text-lg line  leading-5">
        Entre em nosso site, tenha acesso ao seu perfil, inscreva-se no próximo evento e muito mais com apenas alguns
        cliques.
      </p>
      <div className="flex flex-col gap-3 mt-4">
        <Button type="button" button="social" onClick={closeModal}>
          <FaGoogle className="mr-2" size={20} />
          Entrar com o Google
        </Button>

        <Button type="button" button="social" onClick={closeModal}>
          <AiFillGithub className="mr-2" size={20} />
          Entrar com o GitHub
        </Button>
      </div>
    </Modal>
  );
}
